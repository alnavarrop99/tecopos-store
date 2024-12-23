import type { Route } from "./+types/app"
import db from "@tecopos/db"
import { Head } from "./head"
import { Body } from "./body"
import { Nav as Nav } from "./nav"
import Cart from "~/routes/cart/cart"
import { Drawer, DrawerContent, DrawerNav } from "@tecopos/components"
import { Outlet } from "react-router"
import { cart } from "~/session";

export const loader = async ( { request }: Route.LoaderArgs ) => {
  const cookieHeader = request.headers.get('Cookie')
  const cookie = (await cart.parse(cookieHeader) || {}) as Record<number, number>

  const search = new URLSearchParams(request.url)
  let list;

  if(search.has('category')){
    list = await db.product.category(search.get('category')!)
  } else {
    list = await db.product.all('')
  }

  return { 
    list,
    cart: cookie
  }
}

export default ({ loaderData: { list: products, cart } }: Route.ComponentProps) => {
  return (
    <Drawer justify='end'>
      <DrawerContent> 
        <Head cart={cart} />
        <Body children={<Outlet context={products} />} />
      </DrawerContent>
      <DrawerNav> 
        <Nav>
          <Cart list={products} cart={cart} />
        </Nav>
      </DrawerNav>
    </Drawer>
  )
}
