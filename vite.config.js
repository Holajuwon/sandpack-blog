import { defineConfig } from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh';
import mdx from "@mdx-js/rollup";
import { visit } from "unist-util-visit";

function rehypeMetaAsAttributes() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "code" && node.data && node.data.meta) {
        node.properties.meta = node.data.meta;
      }
    });
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    mdx({
      rehypePlugins: [rehypeMetaAsAttributes],
      providerImportSource: "@mdx-js/react",
    }),
  ],
});
