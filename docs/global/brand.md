# 品牌设计规范

> **类型：`INVARIANT`（必须遵守）** · 适用范围：MintPop 品牌下所有产品
>
> Slogan：**Pop into something fresh.** 品牌名、标记、配色、字体跨产品一致，保证用户在不同产品间认得出这是同一个品牌。

## 一、品牌名写法（INVARIANT）

- 正文写法：**MintPop**（M、P 大写，连写，无空格）。
- 词标（logo）里为全小写 `mintpop`——那是 Logo 字形，不代表正文写法。
- ❌ 错误：`Mintpop` / `mint pop` / `MINTPOP`（正文里）/ `Mint-Pop`。
- 产品命名：`MintPop <ProductName>`（如 `MintPop Keeper`）；口语可简称产品名。

## 二、核心标记 · The Pop Mark（INVARIANT）

词标中 `pop` 的字母 **o** 就是品牌标记：**绿色半色调圆盘 + 上下爆裂短线**（halftone fade · burst rays）。

<img src="/assets/brand/icon/mintpop-icon-256.png" alt="MintPop Pop Mark" width="96" style="background:var(--vp-c-bg-soft);padding:12px;border-radius:12px" />

- 标记为**原图标像素级抠出**（透明底），**不得重绘或改动设计**。
- 爆裂短线是**黑色**、专为浅背景设计；深色背景改用白字词标（见[下方](#四、logo-词标)）。

## 三、配色（INVARIANT）

<table>
<thead><tr><th>色卡</th><th>名称</th><th>HEX</th><th>用途</th></tr></thead>
<tbody>
<tr><td><span style="display:inline-block;width:20px;height:20px;border-radius:4px;background:#17D1A7;vertical-align:middle;border:1px solid var(--vp-c-divider)"></span></td><td>Mint</td><td><code>#17D1A7</code></td><td>主色（取自图标实采样）</td></tr>
<tr><td><span style="display:inline-block;width:20px;height:20px;border-radius:4px;background:#1FE3AD;vertical-align:middle;border:1px solid var(--vp-c-divider)"></span></td><td>Mint Bright</td><td><code>#1FE3AD</code></td><td>渐变高光端</td></tr>
<tr><td><span style="display:inline-block;width:20px;height:20px;border-radius:4px;background:#0FB389;vertical-align:middle;border:1px solid var(--vp-c-divider)"></span></td><td>Mint Deep</td><td><code>#0FB389</code></td><td>渐变深色端</td></tr>
<tr><td><span style="display:inline-block;width:20px;height:20px;border-radius:4px;background:#0B0B0C;vertical-align:middle;border:1px solid var(--vp-c-divider)"></span></td><td>Ink</td><td><code>#0B0B0C</code></td><td>文字 / 深色底</td></tr>
<tr><td><span style="display:inline-block;width:20px;height:20px;border-radius:4px;background:#F4F8F6;vertical-align:middle;border:1px solid var(--vp-c-divider)"></span></td><td>Cloud</td><td><code>#F4F8F6</code></td><td>浅色底 / 浅色瓦片</td></tr>
</tbody>
</table>

> 主色 `#17D1A7` 是[设计基线](/global/design-baseline)的默认 Brand 色；产品可换主色，但品牌标记/词标本身的绿不可改。

## 四、字体（INVARIANT）

展示字体**二选一**，正文字体**固定**。产品选哪副展示字体，在自己的设计规范里写明。

| 字体 | 角色 | 气质 | 字重 |
|---|---|---|---|
| **Newsreader** | 展示大标题 / 标题（**默认**；衬线，斜体用于标题内强调） | 专业、稳重 | Medium / Medium Italic |
| **Fredoka** | 展示大标题 / 标题（**可选**；圆润几何无衬线，与 logo 字形同源） | 俏皮、活泼 | SemiBold |
| **Space Grotesk** | UI 与正文（所有产品统一） | — | Regular / Medium / SemiBold / Bold |

- 一律**自托管**（走 [Fontsource](https://fontsource.org)：`@fontsource/newsreader`、`@fontsource/fredoka`、`@fontsource/space-grotesk`），**禁止外链 Google Fonts**，保证含中国大陆在内全球可达。
- 中文**不自托管** webfont（体积以 MB 计），挂在两副西文字体之后走系统回退：`PingFang SC` / `Hiragino Sans GB` / `Microsoft YaHei` / `Noto Sans CJK SC`。
- 词标（logo）字形烤在图片里，不靠任何 webfont 渲染；不要用文字排出 logo，一律引用[资源样例](#六、资源样例)里的词标图。

**字体样张**（本站真实渲染，中文走系统回退）：

<div style="display:grid;gap:16px;margin:12px 0 8px">
  <div style="padding:20px 24px;border:1px solid var(--vp-c-divider);border-radius:12px;background:var(--vp-c-bg-soft)">
    <div style="font-size:12px;color:var(--vp-c-text-2);margin-bottom:8px">Newsreader · 展示（默认）· Medium / Medium Italic</div>
    <div style="font-family:'Newsreader','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans CJK SC',serif;font-weight:500;font-size:40px;line-height:1.15">One API for text, vision, <em>and voice.</em></div>
    <div style="font-family:'Newsreader','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans CJK SC',serif;font-weight:500;font-size:28px;line-height:1.3;margin-top:6px">一个接口，文本、视觉与语音</div>
  </div>
  <div style="padding:20px 24px;border:1px solid var(--vp-c-divider);border-radius:12px;background:var(--vp-c-bg-soft)">
    <div style="font-size:12px;color:var(--vp-c-text-2);margin-bottom:8px">Fredoka · 展示（可选）· SemiBold</div>
    <div style="font-family:'Fredoka','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans CJK SC',sans-serif;font-weight:600;font-size:40px;line-height:1.15">Pop into something fresh.</div>
    <div style="font-family:'Fredoka','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans CJK SC',sans-serif;font-weight:600;font-size:28px;line-height:1.3;margin-top:6px">世界杯赛事预测 · 队名 VS 大数字 2026</div>
  </div>
  <div style="padding:20px 24px;border:1px solid var(--vp-c-divider);border-radius:12px;background:var(--vp-c-bg-soft)">
    <div style="font-size:12px;color:var(--vp-c-text-2);margin-bottom:8px">Space Grotesk · UI 与正文 · Regular / Medium / SemiBold / Bold</div>
    <div style="font-family:'Space Grotesk','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans CJK SC',sans-serif;font-size:17px;line-height:1.6">
      <span style="font-weight:400">Regular 400 — Build text, vision, and voice into your product. 把文本、视觉与语音接进你的产品。</span><br>
      <span style="font-weight:500">Medium 500 — Build text, vision, and voice into your product. 把文本、视觉与语音接进你的产品。</span><br>
      <span style="font-weight:600">SemiBold 600 — Build text, vision, and voice into your product. 把文本、视觉与语音接进你的产品。</span><br>
      <span style="font-weight:700">Bold 700 — Build text, vision, and voice into your product. 把文本、视觉与语音接进你的产品。</span>
    </div>
  </div>
</div>

## 五、Logo · 词标（INVARIANT）

按背景深浅选版本，**不要**把深字版硬放到深底上（反之亦然）：

- **浅背景 → 深字版** `wordmark/mintpop-wordmark-dark.png`
- **深背景 → 白字版** `wordmark/mintpop-wordmark-light.png`

两版的实际样子见下方[资源样例](#六、资源样例)。

## 六、资源样例（INVARIANT）

品牌级资源在本站 `assets/brand/`，各产品**引用同一份**，不要自己重画。**点下方任意文件即可复制它的完整链接**，直接粘到代码或喂给 Agent。

<BrandAssets />

## 七、使用规则（INVARIANT）

- **不许改**：不拉伸变形、不换配色、不加描边/阴影、不旋转、不重绘标记。
- **留白**：Logo 四周留出不小于图标高度 1/2 的净空，不贴边、不被文字包围。
- **最小尺寸**：图标最小 16px，横版词标最小高度 20px。
- **背景**：浅底用深字词标 / 原标记；深底用白字词标。
- **分辨率**：标记「真身」约 208px，故 **favicon / 应用瓦片 / 网页用途都清晰**（均为下采样）。**1024 应用商店图标或大尺寸印刷需放大会糊**——唯一无损办法是把标记重绘成矢量（等于重画一遍），需要时再做。

## 八、域名约定（INVARIANT）

- 主域：`mintpop.ai`。
- 产品站点用**子域**：`<product>.mintpop.ai`（如 `keeper.mintpop.ai`）。
- 规范中心：`standards.mintpop.ai`（即本站）。
