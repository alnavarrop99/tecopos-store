import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('./routes/app/app.tsx', [
    index('./routes/products/products.tsx'),
  ]),
  route('*', './routes/404/404.tsx')
] satisfies RouteConfig;
