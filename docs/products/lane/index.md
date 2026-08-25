# MintPop Lane

> 产品定位**待补**。本页目前只落了品牌图标与素材，其余内容待产品定义清晰后补齐。

## 遵循的品牌总规范

- **账号** → [统一账号接入](/global/account-integration)（`INVARIANT`）。
- **支付** → [统一支付接入](/global/payment-integration)（`INVARIANT`）。
- **品牌**：命名写作 `MintPop Lane`（M、P 大写连写），Logo 用法 → [品牌规范](/global/brand)（`INVARIANT`）。
- **设计**：以[设计基线](/global/design-baseline)为起点，本产品的自定义见 [设计规范](/products/lane/design)。

## 产品图标

图标沿用品牌 [Pop Mark](/global/brand#二、核心标记-·-the-pop-mark-invariant) 的 DNA——**Mint 绿 + 半色调渐隐 + 黑色爆裂短线**——把标记的圆盘换成两条并行的胶囊（即 “lane”）。

素材在 `docs/public/assets/products/lane/`。**点下方任意文件即可复制它的完整链接**，直接粘到代码或喂给 Agent。

<ProductAssets slug="lane" />

### 用法

- **深色背景一律用 `lane-app-cloud.png`**：爆裂短线是黑色、专为浅背景设计，透明底版本放到深底上会丢掉一半图形。这与[品牌规范](/global/brand#七、使用规则-invariant)对标记的要求一致。
- 浅背景可用透明底的 `lane-icon-*.png`。
- 图标由原图**像素级抠出**（白底 → 透明，边缘反预乘还原），**不重绘、不改设计**；需要新尺寸时从 `lane-icon.png` 重新下采样，别拿小图放大。
- 1024 应用商店图标 / 大尺寸印刷会糊（图形真身约 1056px），需要时须重绘成矢量。

> 出图原图（1254×1254 白底 JPG）留档在 `lane-icon-source.jpg`，只为日后重新出图用，**不要在产品里直接引用**。

## 平台

**待补**。若为桌面端，目标平台按约定为 **Apple Silicon Mac + Windows**（不支持 Intel Mac）。
