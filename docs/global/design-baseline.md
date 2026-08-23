# 设计基线

> **类型：`REFERENCE`（参考基线，可自定义）** · 适用范围：MintPop 品牌下所有产品
>
> 这是一套**默认起点**，不是铁律。各产品可按自身调性偏离（在自己的[产品设计规范]里写明覆盖了哪些）——但偏离前先理解基线，保持品牌整体气质（清爽、克制、现代）。**能改**：配色、字体、圆角、密度；**建议守**：整体克制感与可访问性。

## 一、配色（默认值，可覆盖）

默认取品牌 [Mint 配色](/global/brand#三、配色-invariant)为主色，产品可换主色但保留「浅色克制、强调色点缀」的思路。

| 语义 | 默认值 | 说明 |
|---|---|---|
| 主色 Brand | `#17D1A7`（Mint） | 品牌主色；产品可替换为自己的主色 |
| 主色（深） | `#0FB389`（Mint Deep） | hover / 按下态 |
| 文本 Ink | `#0B0B0C` | 正文 |
| 次要文本 | `#6B7280` | 辅助信息 |
| 背景 | `#FFFFFF` / `#F4F8F6`（Cloud） | 页面 / 卡片分层 |
| 分隔线 | `#E5E7EB` | 边框、divider |

> 品牌配色是 `INVARIANT`（见[品牌规范](/global/brand)）；这里是把它作为设计的默认起点，产品**主色**可覆盖。

## 二、字体（REFERENCE）

- 展示 / 标题字体**默认 Newsreader**（衬线，专业稳重）；要俏皮气质的产品可改选 **Fredoka**（圆体），**二选一**，在产品设计规范里写明。正文 / UI 统一 **Space Grotesk**。详见[品牌规范](/global/brand#四、字体-invariant)。
- 一律**自托管**（Fontsource：`@fontsource/newsreader`、`@fontsource/fredoka`、`@fontsource/space-grotesk`），**禁止外链 Google Fonts**，保证含中国大陆在内全球可达。
- 默认字体栈（西文走自托管字体，中文回退系统字体，不自托管中文 webfont）：
  ```css
  --font-sans: 'Space Grotesk', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    'Noto Sans CJK SC', sans-serif;
  --font-serif: 'Newsreader', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    'Noto Sans CJK SC', serif;
  ```
  选 Fredoka 的产品：展示字体栈把 `'Newsreader'` 换成 `'Fredoka'`，尾部回退改 `sans-serif`。

## 三、间距与圆角（REFERENCE）

- **间距刻度**：4 的倍数（4 / 8 / 12 / 16 / 24 / 32 / 48）。
- **圆角**：默认 `8px`（卡片）/ `6px`（按钮）/ `999px`（药丸标签）。产品可整体调大或调小，但保持内部一致。

## 四、可访问性（建议守住）

- 正文与背景对比度 ≥ 4.5:1（WCAG AA）。
- 交互元素有清晰的 hover / focus 态，focus 可见（键盘可达）。
- 不用「仅靠颜色」传达状态，配文字或图标。

## 五、每个产品可以自定义什么

| 项 | 能否改 | 说明 |
|---|---|---|
| 主色 / 强调色 | ✅ 可改 | 保留「克制、强调色点缀」的思路 |
| 展示字体 | ⚠️ 二选一 | Newsreader（默认）或 Fredoka，见[品牌规范](/global/brand#四、字体-invariant) |
| 正文字体 | ❌ 不可改 | 统一 Space Grotesk |
| 圆角 / 间距密度 | ✅ 可改 | 保持产品内部一致 |
| 品牌 Logo / 命名 | ❌ 不可改 | 见 [品牌规范](/global/brand)（INVARIANT） |
| 整体克制感与可访问性 | ⚠️ 建议守 | 偏离要有明确理由 |
