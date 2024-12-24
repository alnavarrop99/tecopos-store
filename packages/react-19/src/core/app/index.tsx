import { Head } from "./head"
import { Body } from "./body"
import { Nav as Nav } from "./nav"
import Cart from "../cart"
import { Drawer, DrawerContent, DrawerNav } from "@tecopos/components"


export default ({ children }: React.PropsWithChildren) => {
  return (
    <Drawer justify='end'>
      <DrawerContent> 
        <Head />
        <Body children={children} />
      </DrawerContent>
      <DrawerNav className="z-20"> 
        <Nav>
          <Cart />
        </Nav>
      </DrawerNav>
    </Drawer>
  )
}

