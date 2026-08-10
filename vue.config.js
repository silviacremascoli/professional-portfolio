const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '127.0.0.1'
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/SCSS/portfolio.scss";`,
      },
    },
  },
});
