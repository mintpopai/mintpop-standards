# MintPop Standards

MintPop 品牌下各产品的**规范与制品中心**：统一账号接入、品牌、设计基线、图标等。
一处维护，**同时服务人（浏览）与 coding Agent（复制 / 直取 markdown）**，各产品接入时来这里参考。

## 信息架构（两层 + 产品门户）

- **首页**：产品**宫格**，列出所有产品，点击进入该产品的文档与素材。
- **品牌总规范 `/global/`**：跨所有产品共享——统一账号接入、品牌 Logo、设计基线（多为 `INVARIANT`）。
- **各产品 `/products/<产品>/`**：产品自己的文档与素材，在总规范基础上扩展或（对 `REFERENCE` 项）自定义。

```
docs/
├── index.md                       # 首页：<ProductGrid/> 宫格
├── global/                        # 品牌总规范（跨产品共享）
│   ├── index.md  account-integration.md  payment-integration.md  brand.md  design-baseline.md
├── products/<slug>/               # 各产品：index.md（概览）+ design.md（设计）+ 按需更多
├── public/assets/
│   ├── brand/                     # 品牌级 Logo/图标 -> /assets/brand/*
│   └── products/<slug>/           # 各产品素材 -> /assets/products/<slug>/*
└── .vitepress/
    ├── products.ts                # 产品清单（单一来源，驱动宫格+导航+侧边栏）
    ├── config.mts
    └── theme/ (Layout, CopyMarkdown, ProductGrid)
```

## 形态

- **内容源**：`docs/**/*.md`（markdown 单一事实来源）+ `docs/public/assets/`（图标等静态资源）。
- **站点**：VitePress 构建成纯静态，nginx 直发，打成 Docker 镜像自部署（不依赖 Cloudflare Pages）。
- **喂 Agent**：每篇文档顶部「📋 复制 Markdown」按钮；同时同一份 `.md` 按 URL 直接可取（如 `/global/account-integration.md`、`/products/keeper/design.md`），交给能联网的 Agent 自取。
- **图标**：进仓库走 nginx 静态直发，**不上 MinIO**（随内容版本化、PR 评审、原子部署）。

## 内容约定

- 每篇规范标题下标注类型：`INVARIANT`（必须遵守，如账号接入/品牌）/ `REFERENCE`（参考基线，如设计）。
- 产品页**能引总规范就引、不重复抄**；只写本产品特有或对 `REFERENCE` 项的自定义。
- **新增产品**：改 `products.ts` 一处 + 建 `products/<slug>/`（index.md + design.md）+ 放素材到 `public/assets/products/<slug>/`。

## 本地开发

```bash
mise run install     # 首次：安装依赖并生成 pnpm-lock.yaml（构建镜像前必须先有 lockfile）
mise run dev         # 本地热更新预览
mise run build       # 构建静态产物到 docs/.vitepress/dist（含把源 .md 拷进产物）
mise run preview     # 预览构建产物
```

> 「复制 Markdown」按钮靠 fetch 本页 `.md`，该文件由构建时的 `buildEnd` 钩子生成，**在 `dev` 下可能取不到、在 `preview` / 生产镜像下正常**。

## 打镜像与部署

```bash
mise run image       # 本地构建镜像 mintpop-standards:local
mise run up          # docker compose 拉起（拉 GHCR 已发布镜像）
mise run down
```

镜像是**私有包**，部署机首次需先登录 GHCR（PAT 需 `read:packages` 权限）：

```bash
echo "<PAT>" | docker login ghcr.io -u <GitHub 用户名> --password-stdin
```

部署机通过环境变量切版本与端口：

```bash
# APP_TAG 是镜像标签，不带 v 前缀（metadata-action 的 type=semver 已把 v0.1.3 剥成 0.1.3）
export APP_TAG=0.1.3 APP_PORT=8080
docker compose pull && docker compose up -d
```

## 图标 / Logo

放进 `docs/public/assets/icons/`，会原样发布到站点根：
`docs/public/assets/icons/logo.svg` → `https://<域名>/assets/icons/logo.svg`。各产品直接引用同一份。

## CI/CD 与发版

`.github/workflows/`：

| 文件 | 触发 | 职责 |
| --- | --- | --- |
| `quality.yml` | `workflow_call`（不独立触发） | 可复用质量门禁：install → typecheck → build |
| `ci.yml` | PR / push main | 调 `quality.yml`，合并前校验 |
| `release.yml` | tag `v*.*.*` / 手动 | 发版前先过 `quality.yml`，再推 GHCR 镜像（`:X.Y.Z` + `:latest`），最后建 GitHub Release |
| `action-notify.yml` | `workflow_run`（CI / Release 完成） | 把流水线结果推到飞书私聊 |

发版一条命令（校验 → 同步 `package.json` 版本并提交 → 打 tag → 推送，由 tag 触发 `release.yml`）：

```bash
mise run release                      # 最新稳定 tag 的 patch+1，无说明
mise run release "更新说明"            # patch+1，带说明
mise run release v0.4.0               # 指定版本号
mise run release v0.4.0 "更新说明"     # 指定版本号 + 说明
```

> 域名规划：`standards.mintpop.ai`。
