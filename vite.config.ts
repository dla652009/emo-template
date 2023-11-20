import { defineConfig, UserConfigExport, ConfigEnv } from "vite";
import Vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { viteMockServe } from "vite-plugin-mock";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      Vue(),
      AutoImport(
        // 按需自动引入API
        {
          imports: ["vue", "vue-router"],
          dts: "types/auto-imports.d.ts",
        }
      ),
      Components(
        // 按需自动引入组件
        {
          resolvers: [
            AntDesignVueResolver({
              importStyle: false, // css in js
            }),
          ],
          dts: "types/components.d.ts",
        }
      ),
      viteMockServe({
        mockPath: "mock", // mock 地址
        localEnabled: command === "serve",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@c": path.resolve(__dirname, "src/components"),
        "@s": path.resolve(__dirname, "src/styles"),
        "@v": path.resolve(__dirname, "src/views"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@s/variables.scss";',
        },
      },
    },
  }
}