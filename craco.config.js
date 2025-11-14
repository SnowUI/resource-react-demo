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
          
          // 确保字符串字面量不被压缩，特别是 componentNames 中的字符串
          // react-scripts 5 使用 SWC 压缩，需要配置 swcMinify 选项
          if (webpackConfig.optimization && webpackConfig.optimization.minimizer) {
            webpackConfig.optimization.minimizer.forEach((minimizer) => {
              // 处理 TerserPlugin
              if (minimizer.constructor.name === 'TerserPlugin') {
                if (minimizer.options && minimizer.options.terserOptions) {
                  minimizer.options.terserOptions = {
                    ...minimizer.options.terserOptions,
                    compress: {
                      ...(minimizer.options.terserOptions.compress || {}),
                      // 保留字符串字面量，不进行压缩
                      strings: false,
                      // 保留对象属性名
                      keep_classnames: true,
                      keep_fnames: true,
                    },
                    // 不压缩对象属性名
                    mangle: {
                      ...(minimizer.options.terserOptions.mangle || {}),
                      properties: false,
                    },
                  };
                }
              }
              // 处理 SWC 压缩（react-scripts 5 默认使用）
              if (minimizer.constructor.name === 'SwcMinifyPlugin') {
                if (minimizer.options) {
                  minimizer.options = {
                    ...minimizer.options,
                    compress: {
                      ...(minimizer.options.compress || {}),
                      // 不压缩字符串
                      strings: false,
                      // 不压缩对象属性
                      properties: false,
                    },
                    mangle: {
                      ...(minimizer.options.mangle || {}),
                      properties: false,
                    },
                  };
                }
              }
            });
          }
          
        }
        return webpackConfig;
      },
    },
  };

