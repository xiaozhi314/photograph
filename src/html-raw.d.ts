// 受管类型声明（由 sync_managed_build_tooling 每次构建前同步，存量项目同样生效）。
// 单文件 HTML artifact 承载页以编译期 `?raw` 字符串导入同目录 page.html；
// 该声明让项目 TSC / check-server 认识 `*.html?raw` 模块，不至于报红。
declare module "*.html?raw" {
  const content: string;
  export default content;
}
