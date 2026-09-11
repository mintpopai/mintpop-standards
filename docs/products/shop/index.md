# MintPop Shop

> MintPop 品牌商店：前端按分组陈列商品，点击购买即创建待支付订单并进入统一收银台。登录与支付都按品牌总规范接入，不自建账号、不自接支付。

商城本体在 `mintpop.ai`，店主管理后台是独立前端项目，部署在子域 `admin.mintpop.ai`（概览 / 商品 / 分组 / 订单 / 用户，固定中文）。技术栈 Spring Boot 4（Java 21）+ MyBatis-Plus + MySQL · Vue 3 + Vite + TypeScript。仓库 [mintpopai/mintpop-shop](https://github.com/mintpopai/mintpop-shop)。

## 遵循的品牌总规范

- **账号** → [统一账号接入](/global/account-integration)（`INVARIANT`）。后端作机密客户端（BFF）走 OIDC 授权码 + PKCE，登录后自签会话 JWT 写 HttpOnly Cookie，账号中心 token 不进浏览器；管理员身份存在本系统 `shop_user.role`，不用账号中心的角色。
- **支付** → [统一支付接入](/global/payment-integration)（`INVARIANT`）。后端 PaymentIntent + webhook，前端拍平「微信支付 / 支付宝 / 银行卡」三个选项。
- **品牌**：命名写作 `MintPop Shop`（M、P 大写连写），顶栏词标直接引用品牌站的 `mintpop-wordmark-dark.png` 并缀 `Shop`；Logo 用法 → [品牌规范](/global/brand)（`INVARIANT`）。
- **设计**：以[设计基线](/global/design-baseline)为起点，本产品的自定义见 [设计规范](/products/shop/design)。

## 产品图标

图标沿用品牌 [Pop Mark](/global/brand#二、核心标记-·-the-pop-mark-invariant) 的 DNA——**Mint 绿 + 半色调渐隐 + 黑色爆裂短线**——把标记的圆盘换成一只**购物袋**：半调圆点从袋子右下角向内渐隐，两侧的爆裂短线保留「pop」的一声。

素材在 `docs/public/assets/products/shop/`。**点下方任意文件即可复制它的完整链接**，直接粘到代码或喂给 Agent。

<ProductAssets slug="shop" />

### 用法

- **深色背景一律用 `shop-app-cloud.png`**：爆裂短线是黑色、专为浅背景设计，透明底版本放到深底上短线会消失。这与[品牌规范](/global/brand#七、使用规则-invariant)对标记的要求一致。
- 浅背景可用透明底的 `shop-icon-*.png`。袋身上的半调圆点是**不透明白色**（不是镂空），换到别的浅底上圆点仍是白的，与出图一致。
- 图标由原图**像素级抠出**（Cloud 底 → 透明，边缘反预乘还原），**不重绘、不改设计**；需要新尺寸时从 `shop-icon.png` 重新下采样，别拿小图放大。
- 1024 应用商店图标 / 大尺寸印刷会糊（图形真身约 810px），需要时须重绘成矢量。

> 出图原图（1254×1254 白底 PNG，自带一层 Cloud 色圆角瓦片）留档在 `shop-icon-source.png`，只为日后重新出图用，**不要在产品里直接引用**。

## 平台

Web（商城 + 管理端两个前端 + 一个后端），以 Docker Compose 部署在自有源站，入口由宿主机 OpenResty 按 Host 分流、Cloudflare 代理；管理端子域另加 Cloudflare Zero Trust Access 作第一道防线。
