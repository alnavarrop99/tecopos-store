import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout('./routes/app/app.tsx', [
    index('./routes/products/products.tsx'),
    ...prefix('cart', [
      route('addOne', './routes/cart/addOne.tsx'),
      route('minusOne', './routes/cart/minusOne.tsx'),
      route('clear', './routes/cart/clear.tsx'),
    ]),
  ]),
  route('*', './routes/404/404.tsx')
] satisfies RouteConfig;
