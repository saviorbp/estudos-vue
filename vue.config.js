const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,

  pwa: {
    themeColor: '#0AD274',
  },
});
