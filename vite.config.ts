import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",

  server: {
  host: true, // ✅ IMPORTANT (instead of localhost / 127.0.0.1)
  port: 8080,

  proxy: {
    "/api": {
      target: "https://api.counterapi.dev",
      changeOrigin: true,
      secure: false,

      // ✅ VERY IMPORTANT
      rewrite: (path) => path.replace(/^\/api/, ""),

      // ✅ force proxy logging
      configure: (proxy) => {
        proxy.on("proxyReq", (proxyReq, req) => {
          console.log("👉 Proxy HIT:", req.url);
        });
      },
    },
  },
},

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));