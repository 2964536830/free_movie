const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "./", dir);
}

module.exports = {
  publicPath: "./",
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    // 设置文件路径别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("com", resolve("src/components"));
    // 这里是对环境的配置，不同环境对应不同的BASE_API，以便axios的请求地址不同
    // config.plugin('define').tap(args => {
    //   const argv = process.argv
    //   const mode = argv[argv.indexOf('--project-mode') + 1]
    //   args[0]['process.env'].MODE = `"${mode}"`
    //   args[0]['process.env'].BASE_API = BASE_API
    //   return args
    // })
  }
};
