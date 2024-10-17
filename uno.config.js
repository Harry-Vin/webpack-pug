import { defineConfig, presetAttributify, presetUno } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
    content: {
        pipeline: {
            include: [
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                '**/*.pug'
            ]
        },
        filesystem: [
            '**/*.pug'
        ]
    },
    presets: [
        presetAttributify(),
        presetUno(),
    ],
    extractors: [
        extractorPug()
    ],
})