import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport, { ElementPlusResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/es/components/${name.substring(3)}/style/css`;
          },
        },
      ],
    }),
  ],
});
