import { Badge, DrawerBtn, Indicator, IndicatorItem, Navbar, NavbarSection } from "@tecopos/components";
import { ShoppingCart, Store } from "lucide-react";
import { Link } from "../../comp/link";
import { use } from "react";
import { globalCtx } from "../../global";

export const Head = () => {
  const [ cart ] = use(globalCtx).carts
  const sum = Object.values(cart).reduce( (acc, el) => acc += el, 0 )
  return <Navbar className="py-6">
    <NavbarSection align='start'> 
      <Link to="/"><Badge className="font-bold py-4 space-x-2" color='neutral' size='lg'> <Store /> <h2>Fake Store</h2></Badge></Link>
    </NavbarSection> 
     <NavbarSection align='end' className="px-6"> 
      <Indicator>
        <IndicatorItem><Badge color='neutral' className="font-semibold">{sum}</Badge></IndicatorItem>
        <DrawerBtn size='sm' layout='square' className="md:btn-md"><ShoppingCart /></DrawerBtn>
      </Indicator>
    </NavbarSection>
  </Navbar>
}
