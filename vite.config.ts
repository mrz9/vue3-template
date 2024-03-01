import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// eslint-disable-next-line node/prefer-global/process
const root: string = process.cwd()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vant auto-import
    Components({
      dts: 'src/typings/components.d.ts',
      resolvers: [VantResolver()],
    }),
    // svg icon
    createSvgIconsPlugin({
      // icon dir
      iconDirs: [path.resolve(root, 'src/icons/svg')],
      // symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
    // setup
    vueSetupExtend(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
