import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite"; // 原子化Css
import path from "path";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    UnoCSS(),
    Components({
      // 按需自动引入组件
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
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
});
