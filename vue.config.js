module.exports = {
  runtimeCompiler: true,
  pwa: {
    name: "Covid19 - MoH",
    start_url: "/",
    themeColor: "#00008b",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
    workboxOptions: {}
  }
};
