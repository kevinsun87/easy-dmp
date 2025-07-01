import path from 'node:path'
import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import { fileURLToPath } from 'url';
// console.log(fileURLToPath(new URL('./public', import.meta.url)))

console.log(import.meta.url)
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            resolvers: [
              ElementPlusResolver(), 
              IconsResolver({
                prefix: 'Icon'
              })
            ],
            dts: path.join(__dirname, './types/auto-imports.d.ts')
        }),
        Components({
            resolvers: [
              ElementPlusResolver(),
              IconsResolver({
                prefix: 'icon',
                enabledCollections: ['ep']
              })
            ],
            dts: path.join(__dirname, './types/components.d.ts')
        }),
        Icons({
          autoInstall: true
        })
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
})  
