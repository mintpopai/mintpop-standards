# MintPop Plug

> 产品定位**待补**。本页目前只落了品牌图标与素材，其余内容待补齐。

用户控制台部署在 `api.mintpop.ai`。仓库 [mintpopai/mintpop-plug](https://github.com/mintpopai/mintpop-plug)（私有）。

## 遵循的品牌总规范

- **账号** → [统一账号接入](/global/account-integration)（`INVARIANT`）。
- **支付** → [统一支付接入](/global/payment-integration)（`INVARIANT`）。
- **品牌**：命名写作 `MintPop Plug`（M、P 大写连写），Logo 用法 → [品牌规范](/global/brand)（`INVARIANT`）。
- **设计**：以[设计基线](/global/design-baseline)为起点，本产品的自定义见 [设计规范](/products/plug/design)。

## 产品图标

图标沿用品牌 [Pop Mark](/global/brand#二、核心标记-·-the-pop-mark-invariant) 的 DNA——**Mint 绿 + 半色调渐隐**——画成一只**插头**，电线绕成一个开口圆环，半调圆点沿圆环右下内侧渐隐。不带黑色爆裂短线。

素材在 `docs/public/assets/products/plug/`。**点下方任意文件即可复制它的完整链接**，直接粘到代码或喂给 Agent。

<ProductAssets slug="plug" />

### 用法

- **首选 `plug-app-cloud.png`**，浅底、深底通用。
- 透明底的 `plug-icon-*.png` 没有黑色短线，浅底、深底都能用。
- 素材按[产品图标规格](/global/brand#八、产品图标-·-app-icon-invariant)由 `scripts/make_icon_set.py` 生成：出图原图的绿统一换成 Mint `#17D1A7`，再加 Cloud 底瓦片。需要新尺寸时从 `plug-icon.png` 重新下采样，别拿小图放大。

> 出图原图（1535×1024 白底 PNG，绿色为出图模型给的 `#00D0A0`，未换色）留档在 `plug-icon-source.png`，只为日后重新出图用，**不要在产品里直接引用**。

## 平台

**待补**。
