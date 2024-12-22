import { Badge, Button, Indicator, IndicatorItem, Navbar, NavbarSection } from "@tecopos/components";
import { ShoppingCart, Store } from "lucide-react";
import { Link } from "../../comp/link";

export const Head = () => {
  return <Navbar>
    <NavbarSection align='start'> 
      <Link to="/"><Badge className="font-bold py-4 space-x-2" color='neutral' size='lg'> <Store /> <h2>Fake Store</h2></Badge></Link>
    </NavbarSection> 
     <NavbarSection align='end'> 
      <Indicator>
        <IndicatorItem>#</IndicatorItem>
        <Button size='sm' layout='square'><ShoppingCart size='1.2rem' /></Button>
      </Indicator>
    </NavbarSection>
  </Navbar>
}
