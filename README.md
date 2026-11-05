# 北京算力足球俱乐部官方网站

最新融合版：保留原官网深色科技蓝、草坪封面、中国足球先驱者及两句原版标语，完整三项赛事名单15/16/26、三梯队安排、组织产业和文化内容。四场经典比赛年份已更正为2025，删除俱乐部场地。

## 构建

Node.js20及以上，运行 npm ci --ignore-scripts，再运行 npm run build。构建输出 dist/，无外部依赖、私密API Key、数据库或运行时外部资源。

website-release.tar.gz 内包含全部HTML、CSS、JS、JSON、真实摄影、卡通头像及本地字体。build-site.mjs先验证归档SHA256，再将文件还原到dist。vercel.json和netlify.toml保留npm run build到dist的标准部署方式。

当前生效源在发布归档中；旧src/、vite.config.ts、index.html仅为旧版历史参考，不参与本次构建。独立维护源码可以从归档解压；修改后重新打包并更新构建脚本的SHA256。

## 识别是否发布成功

新站 /release.json 返回 release: 2026-11-05-original-cover。GitHub提交可能触发已关联的Vercel自动部署，但不代表阿里云Nginx会同步；suanli-fc.com是否更新必须单独访问验证。

原站历史与旧文件由Git保存。摄影资料与许可说明在发布归档内的页面“资料与图像说明”及assets字体许可中保留。
