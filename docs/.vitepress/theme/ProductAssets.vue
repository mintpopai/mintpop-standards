<script setup lang="ts">
import AssetGallery from './AssetGallery.vue'
import { products } from '../products'

// 产品资源画廊：markdown 里写 <ProductAssets slug="lane" /> 即可。
// 文件清单不在页面里手抄，一律从 products.ts（产品单一事实来源）取，
// 与品牌页的 BrandAssets 共用同一个 AssetGallery，展示与复制行为完全一致。
const { slug } = defineProps<{ slug: string }>()

const cards = products.find((p) => p.slug === slug)?.assets ?? []
</script>

<template>
  <AssetGallery v-if="cards.length" :base="`/assets/products/${slug}/`" :cards="cards" />
  <p v-else class="assets-empty">
    该产品尚未登记素材 —— 放文件到 <code>docs/public/assets/products/{{ slug }}/</code>，
    并在 <code>products.ts</code> 的 <code>assets</code> 字段里登记。
  </p>
</template>

<style scoped>
.assets-empty {
  padding: 14px 16px;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 12px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>
