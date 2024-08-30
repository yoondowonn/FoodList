import { createProxyMiddleware } from "http-proxy-middleware";
import { Application } from "express"; // Express 애플리케이션 타입 임포트

export default function setupProxy(app: Application) {
  // app의 타입을 Application으로 지정
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://openapi.foodsafetykorea.go.kr",
      changeOrigin: true,
      // pathRewrite: { '^/api': '' }, // 필요한 경우 주석 해제
    })
  );
}
