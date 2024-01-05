import path from "path";
import Vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { defineConfig, UserConfigExport, ConfigEnv } from "vite";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      Vue(),
      // https://github.com/webfansplz/vite-plugin-vue-devtools
      VueDevTools(),
      AutoImport(
        // 按需自动引入API
        {
          resolvers: [ElementPlusResolver()],
          imports: ["vue", "vue-router", "vue-i18n", "@vueuse/core"],
          dts: "types/auto-imports.d.ts",
        }
      ),
      Components(
        // 按需自动引入组件
        {
          resolvers: [ElementPlusResolver()],
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
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";',
        },
      },
    },
  };
};
