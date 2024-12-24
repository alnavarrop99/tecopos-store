import type { Route } from "./+types/app";
import { Badge, DrawerBtn, Indicator, IndicatorItem, Navbar, NavbarSection, Spinner } from "@tecopos/components";
import { ShoppingCart, Store } from "lucide-react";
import { useFetchers } from "react-router";
import { Link } from "~/comp/link";

export const Head = ( { cart }: { cart: Route.ComponentProps['loaderData']['cart'] } ) => {
  const navigation = useFetchers()?.[0]
  const sum = Object.values(cart).reduce( (acc, el) => acc += el, 0 )
  return <Navbar className="py-6 sticky top-0 z-10">
    <NavbarSection align='start'> 
      <Link to="/"><Badge className="font-bold py-4 space-x-2" color='neutral' size='lg'> <Store /> <h2>Fake Store</h2></Badge></Link>
    </NavbarSection> 
     <NavbarSection align='end' className="px-6"> 
      <Indicator>
        <IndicatorItem>
          { navigation && navigation.state !== "submitting" ? <Spinner size='xs' /> : <Badge color='neutral' className="font-semibold"> {sum} </Badge> }
        </IndicatorItem>
        <DrawerBtn size='sm' layout='square' className="md:btn-md"><ShoppingCart /></DrawerBtn>
      </Indicator>
    </NavbarSection>
  </Navbar>
}
