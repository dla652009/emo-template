import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  shortcuts: [{ "flex-center": "flex flex-justify-center flex-items-center" }],
  presets: [presetUno(), presetAttributify()],
});
