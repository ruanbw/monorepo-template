import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
      ],
      dirs: ['src/components'],
      extensions: ['vue'],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .js, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        {
          'vue-router': ['createRouter', 'createWebHistory'],
        },
        'pinia',
      ],
      dirs: ['src/composables'],
      dts: true,
    }),
    UnoCSS(),
  ],
})
