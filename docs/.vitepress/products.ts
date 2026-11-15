// 产品清单 —— 单一事实来源
// 同时驱动：首页产品宫格、顶部导航「产品」下拉、各产品侧边栏、各产品页的素材画廊。
// 新增一个产品 = 这里加一条 + 建 docs/products/<slug>/（index.md + design.md）+
//   放素材到 docs/public/assets/products/<slug>/ 并在 assets 里登记。

import type { AssetCard } from './theme/asset-types'

export interface Product {
  /** 目录 slug，对应 docs/products/<slug>/ 与 /assets/products/<slug>/ */
  slug: string
  /** 展示名（品牌前缀 + 产品名） */
  name: string
  /** 一句话简介 */
  tagline: string
  /**
   * 产品 Logo，放 docs/public/assets/products/<slug>/；缺省则宫格显示首字母占位。
   * 宫格深浅主题共用同一张图，故优先给「自带浅底瓦片」的版本——品牌 DNA 里的黑色爆裂短线
   * 专为浅背景设计，透明底图放到深色主题上会缺一半（同理，站点 logo 也选 app-cloud 瓦片）。
   */
  logo?: string
  /**
   * 本产品素材清单（路径相对 /assets/products/<slug>/）。
   * 产品页写 <ProductAssets slug="<slug>" /> 即渲染成「点一行复制完整链接」的资源画廊，
   * 与品牌页 /global/brand 的画廊同一套组件；页面里不要再手抄文件表格。
   */
  assets?: AssetCard[]
}

// ⚠️ 下面是示例，请按实际 MintPop 产品编辑增删
export const products: Product[] = [
  {
    slug: 'keeper',
    name: 'MintPop Keeper',
    tagline: '（示例）密码 / 凭据管理桌面端',
    logo: '/assets/products/keeper/logo.svg',
  },
  {
    slug: 'game-seer',
    name: 'MintPop Game Seer',
    tagline: '世界杯赛事预测 · AI 分析师 × 量化双引擎',
    logo: '/assets/products/game-seer/logo.svg',
  },
  {
    slug: 'lane',
    name: 'MintPop Lane',
    tagline: '（待补）一句话简介',
    logo: '/assets/products/lane/lane-app-cloud.png',
    assets: [
      {
        title: '应用瓦片 App Tile @512',
        // 同一张图并排放浅底 / 深底，一眼看出它「深浅主题通用」——这正是它作为首选的理由
        preview: [
          { img: 'lane-app-cloud.png', bg: 'light' },
          { img: 'lane-app-cloud.png', bg: 'dark' },
        ],
        files: [{ path: 'lane-app-cloud.png', desc: 'Cloud 底 · 深浅通用（首选）' }],
      },
      {
        title: '图标 Icon · 透明底',
        preview: [{ img: 'lane-icon-256.png', bg: 'checker' }],
        files: [
          { path: 'lane-icon.png', desc: '原始 · 955×1056' },
          { path: 'lane-icon-square.png', desc: '方形安全区版 · 420' },
          { path: 'lane-icon-256.png', desc: '256 高' },
          { path: 'lane-icon-128.png', desc: '128 高' },
          { path: 'lane-icon-64.png', desc: '64 高' },
        ],
      },
    ],
  },
  {
    slug: 'shop',
    name: 'MintPop Shop',
    tagline: 'MintPop 品牌商店 · 分组陈列商品，一键下单走统一支付',
    logo: '/assets/products/shop/shop-app-cloud.png',
    assets: [
      {
        title: '应用瓦片 App Tile @512',
        preview: [
          { img: 'shop-app-cloud.png', bg: 'light' },
          { img: 'shop-app-cloud.png', bg: 'dark' },
        ],
        files: [{ path: 'shop-app-cloud.png', desc: 'Cloud 底 · 深浅通用（首选）' }],
      },
      {
        title: '图标 Icon · 透明底',
        preview: [{ img: 'shop-icon-256.png', bg: 'checker' }],
        files: [
          { path: 'shop-icon.png', desc: '原始 · 793×810' },
          { path: 'shop-icon-square.png', desc: '方形安全区版 · 420' },
          { path: 'shop-icon-256.png', desc: '256 高' },
          { path: 'shop-icon-128.png', desc: '128 高' },
          { path: 'shop-icon-64.png', desc: '64 高' },
        ],
      },
    ],
  },
  {
    slug: 'plug',
    name: 'MintPop Plug',
    tagline: '（待补）一句话简介',
    logo: '/assets/products/plug/plug-app-cloud.png',
    assets: [
      {
        title: '应用瓦片 App Tile @512',
        preview: [
          { img: 'plug-app-cloud.png', bg: 'light' },
          { img: 'plug-app-cloud.png', bg: 'dark' },
        ],
        files: [{ path: 'plug-app-cloud.png', desc: 'Cloud 底 · 深浅通用（首选）' }],
      },
      {
        title: '图标 Icon · 透明底',
        preview: [{ img: 'plug-icon-256.png', bg: 'checker' }],
        files: [
          { path: 'plug-icon.png', desc: '原始 · 641×658' },
          { path: 'plug-icon-square.png', desc: '方形安全区版 · 420' },
          { path: 'plug-icon-256.png', desc: '256 高' },
          { path: 'plug-icon-128.png', desc: '128 高' },
          { path: 'plug-icon-64.png', desc: '64 高' },
        ],
      },
    ],
  },
  {
    slug: 'raw-lens',
    name: 'MintPop Raw Lens',
    tagline: '（示例）影像处理工具',
    logo: '/assets/products/raw-lens/logo.svg',
  },
]
