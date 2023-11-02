import { defineConfig, presetAttributify, presetUno, } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno()
  ],
  rules: [
  ],
  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
      'wh-full': 'w-full h-full'
    }
  ]
})