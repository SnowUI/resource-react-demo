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
          // 使用绝对路径，确保资源在 GitHub Pages 上正确加载
          // homepage 是 /example，所以 publicPath 应该是 /example/
          webpackConfig.output.publicPath = '/example/';
        }
        return webpackConfig;
      },
    },
  };

