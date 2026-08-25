import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ProductGrid from './ProductGrid.vue'
import BrandAssets from './BrandAssets.vue'
import ProductAssets from './ProductAssets.vue'

// 品牌字体：Newsreader（展示，默认）/ Fredoka（展示，可选）+ Space Grotesk（UI/正文），
// 均自托管（Fontsource），禁外链 Google Fonts，保证含中国大陆在内全球可达（见 /global/brand 字体规范）。
// 三副都装：本站展示字体用 Newsreader，Fredoka 只为品牌页字体样张渲染。
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/newsreader/500.css'
import '@fontsource/newsreader/500-italic.css'
import '@fontsource/fredoka/600.css'

// 品牌主题层：Mint 主色 + 字体映射 + hero 渐变（覆盖 VitePress 默认 indigo）
import './custom.css'

// 扩展默认主题：
// - Layout 包装组件把「复制 Markdown」按钮注入到每篇文档顶部
// - 全局注册 ProductGrid（首页宫格）、BrandAssets（品牌页资源画廊）、ProductAssets（产品页资源画廊）
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ProductGrid', ProductGrid)
    app.component('BrandAssets', BrandAssets)
    app.component('ProductAssets', ProductAssets)
  },
} satisfies Theme
