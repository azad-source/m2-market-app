import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), viteTsconfigPaths()],
    server: {
      proxy: {
        "/0": {
          target: env.VITE_KRAKEN_REST_API_URL,
          changeOrigin: true,
        },
        "/v2": {
          target: env.VITE_KRAKEN_WEBSOCKET_API_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
