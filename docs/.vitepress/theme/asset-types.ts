// 资源画廊的数据契约 —— 品牌资源（BrandAssets）与产品资源（ProductAssets）共用同一套类型，
// 保证两处的卡片结构、预览底色、文件行语义完全一致，改一处两边同步。

/** 预览底色：浅 / 深 / 页面软底 / 棋盘格（透明底如实呈现） */
export type AssetBg = 'light' | 'dark' | 'soft' | 'checker'

export interface AssetFile {
  /** 相对该资源族 base 的路径，如 'icon/mintpop-icon-256.png'、'lane-icon-64.png' */
  path: string
  /** 变体说明，如「深字 · 浅底用」「512×512」 */
  desc: string
}

export interface AssetCard {
  title: string
  /** 预览图（多张时在卡片顶部等分并排，可用不同底色做对照） */
  preview: { img: string; bg: AssetBg }[]
  /** 该族下的文件，每个单独成行，点击即复制完整链接 */
  files: AssetFile[]
}
