# Monorepo

## PNPM

```bash
# 全局安装pnpm
npm install pnpm -g

# 创建工程
mkdir -p monorepo

# 进入工程
cd monorepo

# 初始化
pnpm init

# 创建monorepo配置文件
vi pnpm-workspace.yaml
```

::: code-group
```json [packages.json]
{
  "name": "monorepo",
  "type": "module",
  "version": "1.0.0",
  "private": true,
  "description": "",
  "author": "",
  "license": "ISC",
  "keywords": []
}
```
```yml [pnpm-workspace.yaml]
packages:
  - packages/**
```
:::

## 创建子模块

::: code-group
```bash
mkdir -p packages/app

cd packages/app

# 创建2个基于vite的vue3 + ts 项目
pnpm create vite@latest
```
:::


```
.
├── package.json
├── packages
│   └── app
│       └── vue3-1
│       │   ├── README.md
│       │   ├── index.html
│       │   ├── package.json
│       │   ├── public
│       │   │   └── vite.svg
│       │   ├── src
│       │   │   ├── App.vue
│       │   │   ├── assets
│       │   │   │   └── vue.svg
│       │   │   ├── main.ts
│       │   │   └── vite-env.d.ts
│       │   ├── tsconfig.json
│       │   ├── tsconfig.node.json
│       │   └── vite.config.ts
│       └── vue3-2
│           ├── README.md
│           ├── index.html
│           ├── package.json
│           ├── public
│           │   └── vite.svg
│           ├── src
│           │   ├── App.vue
│           │   ├── assets
│           │   │   └── vue.svg
│           │   ├── main.ts
│           │   └── vite-env.d.ts
│           ├── tsconfig.json
│           ├── tsconfig.node.json
│           └── vite.config.ts
└── pnpm-workspace.yaml
```

## 安装依赖

```bash
# 回到 monorepo 根目录
cd ../../

# 安装依赖，此时会为packages下的所有项目安装依赖
pnpm install
```

## 为特定项目安装依赖

```bash
# 回到 monorepo 根目录
pnpm -F packages/app/vue3 add axios
```

> [!TIP]
> 也可以在项目根目录直接运行指定项目packages中的script脚本

```bash
pnpm -F packages/app/vue3 dev
```
