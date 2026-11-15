"""把 AI 出的图标原图（纯色底、只画图形）做成一整套 MintPop 产品图标素材。

用法：
    uv run --with pillow python make_icon_set.py <原图> <slug> <输出目录> [换色，如 #17D1A7]

产出（与 Lane / Shop 现有素材同名同规格）：
    <slug>-app-cloud.png   应用瓦片 512×512：Cloud 底、22% 圆角、图形居中进 336×336 安全区
    <slug>-icon.png        透明底原始尺寸（裁到图形边缘）
    <slug>-icon-square.png 透明底方形 420×420，图形居中进 390×390
    <slug>-icon-256/128/64.png  透明底，按高度缩放

瓦片的底色、圆角、安全区全部由本脚本决定，出图模型只负责画图形。
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

# —— 应用图标规格（与 docs/global/brand.md「八、产品图标」一致）——
TILE = 512
RADIUS = round(TILE * 0.22)  # 112，普通圆弧
CLOUD = (0xF4, 0xF8, 0xF6, 255)
SAFE = 336  # 图形安全区边长（上下各留 88）
SQUARE, SQUARE_SAFE = 420, 390
HEIGHTS = (256, 128, 64)
SS = 4  # 瓦片圆角超采样倍数，抗锯齿


def cut_out(src: Image.Image) -> Image.Image:
    """去掉与画布边缘连通的底色，边缘一圈按「颜色转透明」反预乘还原。
    图形内部被包住的底色（如袋身上的白点）保持不透明，不会被挖空。"""
    rgb = src.convert("RGB")
    w, h = rgb.size
    corners = [rgb.getpixel(p) for p in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]]
    bg = tuple(sorted(c[i] for c in corners)[1] for i in range(3))  # 四角取中位，避开个别脏点

    marker = (255, 0, 255)
    flood = rgb.copy()
    for p in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
        if flood.getpixel(p) != marker:
            ImageDraw.floodfill(flood, p, marker, thresh=40)
    fp, rp = flood.load(), rgb.load()
    is_bg = Image.new("L", (w, h), 0)
    bp = is_bg.load()
    for y in range(h):
        for x in range(w):
            if fp[x, y] == marker:
                bp[x, y] = 255
    fringe = is_bg.filter(ImageFilter.MaxFilter(5))  # 底色区外扩 2px = 抗锯齿边缘
    fr = fringe.load()

    out = Image.new("RGBA", (w, h))
    op = out.load()
    for y in range(h):
        for x in range(w):
            c = rp[x, y]
            if bp[x, y]:
                op[x, y] = (0, 0, 0, 0)
            elif fr[x, y]:
                # 颜色转透明：以底色为参照算最小 alpha，再反预乘还原前景色
                a = 0.0
                for i in range(3):
                    if c[i] > bg[i]:
                        a = max(a, (c[i] - bg[i]) / (255 - bg[i] or 1))
                    elif c[i] < bg[i]:
                        a = max(a, (bg[i] - c[i]) / (bg[i] or 1))
                if a <= 0.02:
                    op[x, y] = (0, 0, 0, 0)
                else:
                    fg = tuple(max(0, min(255, round((c[i] - bg[i]) / a + bg[i]))) for i in range(3))
                    op[x, y] = (*fg, round(a * 255))
            else:
                op[x, y] = (*c, 255)
    box = out.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    return out.crop(box)


def resize(im: Image.Image, size) -> Image.Image:
    # 预乘 alpha 下缩放，避免透明边缘发灰发黑
    return im.convert("RGBa").resize(size, Image.LANCZOS).convert("RGBA")


def fit(im: Image.Image, box: int) -> Image.Image:
    s = box / max(im.size)
    return resize(im, (max(1, round(im.width * s)), max(1, round(im.height * s))))


def paste_center(canvas: Image.Image, mark: Image.Image) -> Image.Image:
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    layer.paste(mark, ((canvas.width - mark.width) // 2, (canvas.height - mark.height) // 2))
    return Image.alpha_composite(canvas, layer)


def tile(mark: Image.Image) -> Image.Image:
    big = Image.new("RGBA", (TILE * SS, TILE * SS), (0, 0, 0, 0))
    ImageDraw.Draw(big).rounded_rectangle(
        (0, 0, TILE * SS - 1, TILE * SS - 1), radius=RADIUS * SS, fill=CLOUD
    )
    base = resize(big, (TILE, TILE))
    return paste_center(base, fit(mark, SAFE))


def recolor(im: Image.Image, hex_color: str) -> Image.Image:
    """把图形里的绿色像素统一换成指定色（保留 alpha）；黑色短线、白色圆点不受影响。"""
    t = tuple(int(hex_color.lstrip("#")[i : i + 2], 16) for i in (0, 2, 4))
    px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = px[x, y]
            if a and g > r + 60 and g > 100:
                px[x, y] = (*t, a)
    return im


def main(src_path: str, slug: str, out_dir: str, color: str | None = None) -> None:
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    mark = cut_out(Image.open(src_path))
    if color:
        mark = recolor(mark, color)

    tile(mark).save(out / f"{slug}-app-cloud.png")
    mark.save(out / f"{slug}-icon.png")
    sq = paste_center(Image.new("RGBA", (SQUARE, SQUARE), (0, 0, 0, 0)), fit(mark, SQUARE_SAFE))
    sq.save(out / f"{slug}-icon-square.png")
    for h in HEIGHTS:
        resize(mark, (max(1, round(mark.width * h / mark.height)), h)).save(out / f"{slug}-icon-{h}.png")
    print(f"done → {out}  (mark {mark.width}×{mark.height})")


if __name__ == "__main__":
    main(*sys.argv[1:5])
