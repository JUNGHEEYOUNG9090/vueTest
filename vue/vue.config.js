const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:"../src/main/resources/static",
  indexPath:"index.html",
  devServer:{
    port:9191,
    proxy:"http://localhost:9191",
  },
  chainWebpack:config=>{
    const svgRole = config.module.rule("svg");
    svgRole.uses.clear();
    svgRole.use("vue-svg-loader").loader("vue-svg-loader");
  }
})
