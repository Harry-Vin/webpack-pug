module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {
          browsers: ['last 2 versions','> 5%']
        },
        // "postcss-px-to-viewport": {
        //     viewportWidth: 1920,
        //     viewportHeight: 1080,
        //     unitPrecision: 3,
        //     viewportUnit: 'vw',
        //     selectorBlackList: [], //这里配置不参与转换的类名
        //     minPixelValue: 1,
        //     mediaQuery: true
        // },
    }
};
