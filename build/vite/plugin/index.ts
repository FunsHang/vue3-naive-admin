/**
 * * 组件库按需引入插件
 * usage: 直接使用组件,无需在任何地方导入组件
 */
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

/**
 * * unplugin-icons插件，自动引入iconify图标
 * usage: https://github.com/antfu/unplugin-icons
 * 图标库: https://icones.js.org/
 */
import Icons from "unplugin-icons/vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { unocss } from "./unocss";

import { configHtmlPlugin } from "./html";
import { configCompressPlugin } from "./compress";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } =
    viteEnv;
  const plugins = [
    vue(),
    vueJsx(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
      customCollections: {
        test: FileSystemIconLoader("src/icons", (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
    }),
    unocss(),
    configHtmlPlugin(viteEnv, isBuild),
  ];

  if (isBuild) {
    //   plugins.push(
    //     visualizer({
    //       open: true,
    //       gzipSize: true,
    //       brotliSize: true,
    //     })
    //   )
    plugins.push(
      configCompressPlugin(
        VITE_BUILD_COMPRESS,
        VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      )
    );
  }

  return plugins;
}
