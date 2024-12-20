import * as auth from './auth'
import * as user from './user'
import * as product from './product'
import * as cart from './cart'

export default {
  auth,
  product,
  cart,
  user
}

export type Auth = {
  Res: auth.Res
  Req: auth.Req
}
export type Product = {
  Res: product.Product,
  Query: product.Query
  Req: Omit<Product['Res'], 'id'>
}
export type Cart = {
  Res: cart.Cart,
  Query: cart.Query
  Req: Omit<Cart['Res'], 'id'>
}
export type User = {
  Res: user.User
  Query: user.Query
  Req: Omit<User['Res'], 'id'>
}

