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

  const url = new URL(request.url)
  const search = url.searchParams
  let list;

  if(search.get('category')){
    list = await db.product.category(search.get('category')!)
  } else {
    list = await db.product.all('')
  }

  return { 
    list,
    cart: cookie,
    search: search.get('category') || '',
  }
}

export default ({ loaderData: { list: products, cart, search } }: Route.ComponentProps) => {
  return (
    <Drawer justify='end'>
      <DrawerContent> 
        <Head cart={cart} />
        <Body search={search} children={<Outlet />} />
      </DrawerContent>
      <DrawerNav className="z-20"> 
        <Nav>
          <Cart list={products} cart={cart} search={search} />
        </Nav>
      </DrawerNav>
    </Drawer>
  )
}
