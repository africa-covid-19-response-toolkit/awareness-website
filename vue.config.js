// vue.config.js
module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: process.env.VUE_APP_TITLE || "CoVID-19 Awareness Site"
    }
  },
  runtimeCompiler: true,
  pwa: {
    name: process.env.VUE_APP_TITLE || "CoVID-19 Awareness Site",
    start_url: "/",
    themeColor: "rgb(4, 69, 176)",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
    workboxOptions: {}
  }
};
