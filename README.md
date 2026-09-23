# 学会了吗

研究简报、三步练习与问卷资料的统一静态站点。

- [站点首页](https://jasunesihgawsfdgiagfyeqwte.github.io/three-beats-demo/)
- [研究简报](https://jasunesihgawsfdgiagfyeqwte.github.io/three-beats-demo/brief.html)
- [三步练习](https://jasunesihgawsfdgiagfyeqwte.github.io/three-beats-demo/practice.html)

## 内容

| 文件 | 内容 |
|---|---|
| `index.html` | 统一首页与资料入口 |
| `brief.html` | 四节简报、八组研究结论、产品矩阵与问卷方案 |
| `practice.html` | 三步练习、答案核对、计时与结果下载 |
| `downloads/README.md` | 编号来源台账 |
| `downloads/clustering.md` | 八组结论与设计定位 |
| `downloads/survey.txt` | 问卷星导入文件 |
| `downloads/create_google_form.gs` | Google Forms 建表脚本 |
| `downloads/survey-guide.md` | 问卷部署与分析方案 |

## 静态部署

GitHub Pages 从 `main` 分支根目录发布；`.nojekyll` 关闭 Jekyll 处理。站点使用 HTML、CSS 和浏览器 JavaScript，无需服务器、数据库或安装依赖。页面采用相对链接，图标内嵌于简报。

也可下载仓库，在目录中运行 `python -m http.server 8000`，再访问 `http://localhost:8000/`。

练习记录只保留在当前页面，用户可以下载本次结果。问卷文件为部署材料，不表示问卷已开放收集。
