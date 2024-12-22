import { Badge, Button, Indicator, IndicatorItem, Navbar, NavbarSection } from "@tecopos/components";
import { ShoppingCart } from "lucide-react";

export const Head = () => {
  return <Navbar>
    <NavbarSection align='start'> 
      <Badge className="font-bold" color='neutral' size='lg'>Fake Store</Badge>
    </NavbarSection> 
     <NavbarSection align='end'> 
      <Indicator>
        <IndicatorItem>#</IndicatorItem>
        <Button size='sm' layout='square'><ShoppingCart size='1.2rem' /></Button>
      </Indicator>
    </NavbarSection>
  </Navbar>
}
