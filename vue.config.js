module.exports = {
  pwa: {
    name: "勞健保計算",
    themeColor: '#ffffff',
    msTileColor: '#607d8b',
    manifestOptions: {
      start_url: '.',
      background_color: '#ffffff'
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap:false,
  indexPath: 'index.html',
  assetsDir: 'tools',
  outputDir: 'docs',
  publicPath : ''
}