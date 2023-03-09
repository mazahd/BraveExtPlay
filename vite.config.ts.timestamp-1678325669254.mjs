// vite.config.ts
import { crx } from "file:///Users/money/Projects/WebExtensions/SelectExt/node_modules/.pnpm/@crxjs+vite-plugin@2.0.0-beta.3/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import { svelte } from "file:///Users/money/Projects/WebExtensions/SelectExt/node_modules/.pnpm/@sveltejs+vite-plugin-svelte@1.1.0_svelte@3.52.0+vite@3.2.0/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js";
import { resolve } from "node:path";
import { defineConfig } from "file:///Users/money/Projects/WebExtensions/SelectExt/node_modules/.pnpm/vite@3.2.0/node_modules/vite/dist/node/index.js";

// manifest.json
var manifest_default = {
  name: "selectExt",
  description: "Selection Playground",
  version: "1.0",
  manifest_version: 3,
  icons: {
    "16": "src/assets/icons/get_started16.png",
    "32": "src/assets/icons/get_started32.png",
    "48": "src/assets/icons/get_started48.png",
    "128": "src/assets/icons/get_started128.png"
  },
  commands: {
    googleSearch: {
      description: "Search Google",
      suggested_key: {
        mac: "Command+MacCtrl+G"
      }
    }
  },
  content_scripts: [
    {
      matches: ["https://*/*"],
      js: ["src/content/index.ts"]
    }
  ],
  background: {
    service_worker: "src/background/index.ts"
  },
  options_ui: {
    page: "src/options/options.html",
    open_in_tab: true
  },
  action: {
    default_popup: "src/popup/popup.html",
    default_icon: {
      "16": "src/assets/icons/get_started16.png",
      "32": "src/assets/icons/get_started32.png",
      "48": "src/assets/icons/get_started48.png",
      "128": "src/assets/icons/get_started128.png"
    }
  },
  permissions: ["storage", "tabs", "activeTab"]
};

// vite.config.ts
var __vite_injected_original_dirname = "/Users/money/Projects/WebExtensions/SelectExt";
var srcDir = resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig({
  plugins: [svelte(), crx({ manifest: manifest_default })],
  resolve: {
    alias: {
      src: srcDir
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbW9uZXkvUHJvamVjdHMvV2ViRXh0ZW5zaW9ucy9TZWxlY3RFeHRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tb25leS9Qcm9qZWN0cy9XZWJFeHRlbnNpb25zL1NlbGVjdEV4dC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbW9uZXkvUHJvamVjdHMvV2ViRXh0ZW5zaW9ucy9TZWxlY3RFeHQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBjcnggfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tIFwiQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IG1hbmlmZXN0IGZyb20gXCIuL21hbmlmZXN0Lmpzb25cIjtcblxuY29uc3Qgc3JjRGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbc3ZlbHRlKCksIGNyeCh7IG1hbmlmZXN0IH0pXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICBzcmM6IHNyY0RpcixcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlULFNBQVMsV0FBVztBQUM3VSxTQUFTLGNBQWM7QUFDdkIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIN0IsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxTQUFTLFFBQVEsa0NBQVcsS0FBSztBQUd2QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSwyQkFBUyxDQUFDLENBQUM7QUFBQSxFQUNyQyxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLO0FBQUEsSUFDVDtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
