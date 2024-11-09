const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
const { devServer } = require('react-app-rewired/config-overrides')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  config => {
    // Webpack DevServer 설정 추가
    if (config.devServer) {
      config.devServer.disableHostCheck = true
    } else {
      config.devServer = {
        disableHostCheck: true,
      }
    }
    return config
  },
)
