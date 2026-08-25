<script setup lang="ts">
import AssetGallery from './AssetGallery.vue'
import type { AssetCard } from './asset-types'

// 品牌级资源清单 —— 驱动 /global/brand 的「资源样例」画廊。
// 展示与复制逻辑全在 AssetGallery，本组件只提供数据（与各产品的 ProductAssets 同构）。
const base = '/assets/brand/'

const cards: AssetCard[] = [
  {
    title: '词标 Wordmark',
    // 两版天生需要相反底色：深字配浅底、白字配深底 —— 预览对半分开，顺带把用法讲清楚
    preview: [
      { img: 'wordmark/mintpop-wordmark-dark.png', bg: 'light' },
      { img: 'wordmark/mintpop-wordmark-light.png', bg: 'dark' },
    ],
    files: [
      { path: 'wordmark/mintpop-wordmark-dark.png', desc: '深字 · 浅底用' },
      { path: 'wordmark/mintpop-wordmark-light.png', desc: '白字 · 深底用' },
    ],
  },
  {
    title: '图标 The Pop Mark',
    preview: [{ img: 'icon/mintpop-icon-256.png', bg: 'checker' }],
    files: [
      { path: 'icon/mintpop-icon.png', desc: '原始 · 真身 ≈208px' },
      { path: 'icon/mintpop-icon-square.png', desc: '方形安全区版' },
      { path: 'icon/mintpop-icon-256.png', desc: '256×256' },
      { path: 'icon/mintpop-icon-128.png', desc: '128×128' },
      { path: 'icon/mintpop-icon-64.png', desc: '64×64' },
    ],
  },
  {
    title: '应用图标 App Icon @512',
    preview: [
      { img: 'app-icon/mintpop-app-cloud.png', bg: 'light' },
      { img: 'app-icon/mintpop-app-white.png', bg: 'light' },
      { img: 'app-icon/mintpop-avatar-round.png', bg: 'light' },
    ],
    files: [
      { path: 'app-icon/mintpop-app-cloud.png', desc: 'Cloud · 主用（512）' },
      { path: 'app-icon/mintpop-app-white.png', desc: 'White · 512' },
      { path: 'app-icon/mintpop-avatar-round.png', desc: '圆形头像 · 512' },
    ],
  },
  {
    title: '头像 Avatar',
    preview: [{ img: 'avatar.png', bg: 'light' }],
    files: [{ path: 'avatar.png', desc: '原始头像' }],
  },
  {
    title: 'Favicon 全套',
    preview: [
      { img: 'favicon/favicon-32.png', bg: 'light' },
      { img: 'favicon/favicon-48.png', bg: 'light' },
      { img: 'favicon/apple-touch-icon.png', bg: 'light' },
    ],
    files: [
      { path: 'favicon/favicon-16.png', desc: '16×16' },
      { path: 'favicon/favicon-32.png', desc: '32×32' },
      { path: 'favicon/favicon-48.png', desc: '48×48' },
      { path: 'favicon/favicon-180.png', desc: '180×180' },
      { path: 'favicon/favicon-192.png', desc: '192×192' },
      { path: 'favicon/favicon-256.png', desc: '256×256' },
      { path: 'favicon/apple-touch-icon.png', desc: 'Apple Touch · 180' },
    ],
  },
]
</script>

<template>
  <AssetGallery :base="base" :cards="cards" />
</template>
