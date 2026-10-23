# 付世杰 · 视频作品集

React + Three.js 复古电视作品集，包含首页鼠标跟随、拖动旋转、CRT 熄屏转场、二级复古电视，以及静音自动循环的磁带未来主义控制室背景视频。

## GitHub Pages

发布目录为 `docs/`。在仓库 Settings → Pages 选择 Deploy from a branch，分支 main，目录 /docs。

资源使用相对路径，支持 GitHub Pages 项目子目录。`docs/.nojekyll` 禁用 Jekyll 处理。背景视频和图片随站点部署，不依赖原来的 Sites 或妙搭域名。

修改后运行 `pnpm install --frozen-lockfile` 和 `pnpm build`，并保留 `docs/.nojekyll`。

支持减少动态效果偏好；视频默认静音循环，在页面后台暂停。部分手机浏览器可能要求轻触页面才能开始播放。
