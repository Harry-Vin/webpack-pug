module.exports = {
  "presets": [
    ["@babel/preset-env", {
      targets: {
        browsers: [
          "> 0.25%",
          "last 2 versions",
          "not dead",
          "iOS >= 9",
          "Android >= 4.4"
        ]
      },
      useBuiltIns: "usage",
      corejs: 3,
      modules: false,
      debug: true,
      include: ["es.object.has-own"]
    }],
    "@babel/react",
    "@babel/typescript"
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime",       {
      corejs: 3,           // 使用 runtime-corejs3，避免全局污染
      helpers: true,       // 自动引入 Babel 辅助函数
      regenerator: true,   // 包含 async/await 等 generator 的 polyfill
      useESModules: false  // 使用 commonjs 模块风格
    }]
  ],
  // "ignore": [
  //     "src/script/lib/**/*.js" // 跳过文件夹中的所有 .js 文件
  // ]
}
