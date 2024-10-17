import postcssImport from 'postcss-import'
import PostcssPresetEnv from 'postcss-preset-env'

export default {
    plugins: [
        postcssImport,
        PostcssPresetEnv({
            browsers: ['last 2 versions','> 5%']
        }),
    ],
}