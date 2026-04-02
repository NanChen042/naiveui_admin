# Vue Naive Admin 项目技术文档

## 1. 项目简介
本项目是一个基于 Vue 3 和 Naive UI 构建的后台管理系统模版。主要功能包括动态路由、权限控制（RBAC）、数据可视化以及响应式布局。

## 2. 技术栈
- **框架**: Vue 3.5.31
- **构建工具**: Vite 8.0.3
- **组件库**: Naive UI 2.44.1
- **样式**: TailwindCSS 4.2.2
- **状态管理**: Pinia 3.0.4
- **路由**: Vue Router 5.0.4

## 3. 目录结构说明
```text
src/
├── api/             # 接口请求定义
├── assets/          # 静态资源与样式文件
├── components/      # 公共组件
├── directives/      # 自定义指令（如权限控制 v-permission）
├── hooks/           # Composition API 逻辑封装（Composables）
├── layouts/         # 页面框架布局
├── router/          # 路由配置与守卫逻辑
├── store/           # Pinia 状态管理
├── utils/           # 工具函数封装
└── views/           # 业务视图页面
```

## 4. 核心功能实现

### 4.1 身份认证与权限守卫
- **登录流**: 用户在登录页输入账号密码。前端根据账号匹配角色（admin/user），生成模拟 Token 并存储在 LocalStorage。
- **路由守卫**: 在 `src/router/index.ts` 中通过 `router.beforeEach` 实现。
  - 检查 Token：无 Token 则重定向至 `/login`。
  - 角色校验：根据路由 `meta.roles` 配置，校验当前用户角色是否有权访问。
- **按钮权限**: 通过 `v-permission` 指令实现。若当前用户角色不在指令配置的数组中，则 DOM 节点会被移除。

### 4.2 验证码机制
- **实现**: `src/utils/captcha.ts` 中封装了基于 SVG 的生成逻辑。
- **校验**: 登录时比对用户输入与生成的验证码字符串（忽略大小写）。

### 4.3 ECharts 响应式
- **封装**: `src/hooks/useEcharts.ts` 利用 `ResizeObserver` 监听容器偏移，解决侧边栏折叠时图表不自适应的问题。
- **主题**: 监听 `appStore.isDark`，在暗黑模式切换时重新初始化图表实例。

## 5. 开发指南

### 5.1 新增模块流程
1. 在 `src/router/modules/` 下新增路由文件。
2. 在 `src/views/` 下创建对应的 `.vue` 页面。
3. 若需在左侧菜单显示图标，在 `src/hooks/useMenu.ts` 的 `iconMap` 中添加映射。

### 5.2 状态管理规范
- **appStore**: 控制侧边栏折叠、暗黑模式切换、全局 UI 配置（标签页、页脚、水印）。
- **userStore**: 处理登录状态、登入/登出逻辑及用户信息缓存。

### 5.3 样式规范
- 优先使用 TailwindCSS 原子化类名。
- 颜色应引用全局变量，以适配 Naive UI 的动态换肤功能。

## 6. 环境运行
- **安装**: `pnpm install`
- **开发**: `pnpm dev`
- **构建**: `pnpm build`
