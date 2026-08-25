<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'
import type { AssetCard } from './asset-types'

// 资源样例画廊（纯展示层）：按「资源族」分卡，每个族下的**每个文件**单独成行，
// 点任意一行即复制该文件的完整生产链接。品牌资源与各产品资源共用本组件，UI 不分叉。
// 预览图用相对路径（本地也能显示），复制的链接固定用规范中心的正式域名（分享出去永远可用）。
const SITE = 'https://standards.mintpop.ai'

const { base, cards } = defineProps<{
  /** 该资源族的 URL 前缀，如 '/assets/brand/'、'/assets/products/lane/'（须以 / 结尾） */
  base: string
  cards: AssetCard[]
}>()

function fullUrl(path: string) {
  return SITE + withBase(base + path)
}
function fileName(path: string) {
  return path.split('/').pop() ?? path
}

// 同一时刻只标记一个「刚复制成功 / 失败」的文件，短暂高亮后复位
const copied = ref('')
const failed = ref('')
let timer: ReturnType<typeof setTimeout> | undefined

async function copy(path: string) {
  const url = fullUrl(path)
  try {
    await navigator.clipboard.writeText(url)
    copied.value = path
    failed.value = ''
  } catch {
    failed.value = path
    copied.value = ''
  }
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    copied.value = ''
    failed.value = ''
  }, 1800)
}
</script>

<template>
  <div class="asset-gallery">
    <div v-for="c in cards" :key="c.title" class="asset-card">
      <div class="asset-preview" :class="{ single: c.preview.length === 1 }">
        <div
          v-for="p in c.preview"
          :key="p.img"
          class="pane"
          :class="`bg-${p.bg}`"
        >
          <img :src="withBase(base + p.img)" :alt="c.title" />
        </div>
      </div>

      <div class="asset-body">
        <div class="asset-title">{{ c.title }}</div>
        <ul class="file-list">
          <li v-for="f in c.files" :key="f.path">
            <button
              type="button"
              class="file-row"
              :class="{ ok: copied === f.path, err: failed === f.path }"
              :aria-label="`复制 ${fileName(f.path)} 的完整链接`"
              @click="copy(f.path)"
            >
              <span class="file-main">
                <code class="file-name">{{ fileName(f.path) }}</code>
                <span class="file-desc">{{ f.desc }}</span>
              </span>
              <span class="file-action" aria-hidden="true">
                <span v-if="copied === f.path" class="tag ok">已复制</span>
                <span v-else-if="failed === f.path" class="tag err">失败</span>
                <svg
                  v-else
                  class="ico"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.asset-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 18px;
  margin: 22px 0;
}
.asset-card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

/* —— 预览区：多变体时按份数等分，词标即天然「浅底 | 深底」对照 —— */
.asset-preview {
  display: flex;
  height: 132px;
}
.asset-preview .pane {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  min-width: 0;
}
.asset-preview.single .pane {
  padding: 20px;
}
.asset-preview .pane img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.bg-light {
  background: #ffffff;
}
.bg-dark {
  background: #0b0b0c;
}
.bg-soft {
  background: var(--vp-c-bg-soft);
}
/* 透明底用棋盘格如实呈现「透明」 */
.bg-checker {
  background-color: var(--vp-c-bg-soft);
  background-image:
    linear-gradient(45deg, var(--vp-c-divider) 25%, transparent 25%),
    linear-gradient(-45deg, var(--vp-c-divider) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--vp-c-divider) 75%),
    linear-gradient(-45deg, transparent 75%, var(--vp-c-divider) 75%);
  background-size: 14px 14px;
  background-position: 0 0, 0 7px, 7px -7px, -7px 0;
}

/* —— 文件列表：整行即复制按钮 —— */
.asset-body {
  padding: 12px 12px 8px;
  border-top: 1px solid var(--vp-c-divider);
}
.asset-title {
  font-family: var(--mp-font-display, var(--vp-font-family-base));
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  padding: 2px 4px 8px;
}
.file-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.file-row {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 7px 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-1);
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s, box-shadow 0.15s;
}
.file-row:hover {
  background: var(--vp-c-default-soft);
}
.file-row:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}
.file-row.ok {
  background: var(--vp-c-brand-soft);
}
.file-main {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  flex: 1;
}
.file-name {
  font-family: var(--vp-font-family-mono);
  font-size: 12.5px;
  color: var(--vp-c-text-1);
  background: transparent;
  padding: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.file-row.ok .file-name {
  color: var(--vp-c-brand-1);
}
.file-desc {
  font-size: 11.5px;
  color: var(--vp-c-text-3);
}
.file-action {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  color: var(--vp-c-text-3);
}
.file-row:hover .file-action {
  color: var(--vp-c-brand-1);
}
.ico {
  display: block;
}
.tag {
  font-size: 11.5px;
  font-weight: 600;
  line-height: 1;
}
.tag.ok {
  color: var(--vp-c-brand-1);
}
.tag.err {
  color: var(--vp-c-danger-1, #e5484d);
}

@media (prefers-reduced-motion: reduce) {
  .file-row {
    transition: none;
  }
}
</style>
