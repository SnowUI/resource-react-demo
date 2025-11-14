const path = require('path');

module.exports = {
    style: {
      postcss: {
        mode: 'file',
      },
    },
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        // 修改输出目录为 docs（GitHub Pages 支持）
        if (env === 'production') {
          webpackConfig.output.path = path.resolve(__dirname, 'docs');
          // 确保 publicPath 正确
          if (webpackConfig.output.publicPath !== undefined) {
            webpackConfig.output.publicPath = './';
          }
        }
        return webpackConfig;
      },
    },
  };

