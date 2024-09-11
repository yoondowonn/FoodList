import { createProxyMiddleware } from "http-proxy-middleware";
import { Application } from "express";

export default function setupProxy(app: Application) {
  app.use(
    "/api/edamam",
    createProxyMiddleware({
      target: "https://api.edamam.com",
      changeOrigin: true,
      pathRewrite: { "^/api/edamam": "/api/recipes/v2" },
    })
  );
}
