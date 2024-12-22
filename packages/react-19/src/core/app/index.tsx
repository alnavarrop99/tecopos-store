import { Head } from "./head"
import { Body } from "./body"
import { Nav as Nav } from "./nav"
import Cart from "../cart"
import { createContext, useState } from "react"
import { Drawer, DrawerContent, DrawerNav } from "@tecopos/components"

export const cartCtx = createContext<[ state: Record<number, number>, setState: React.Dispatch<Record<number, number>> ]>([{}, ()=>{}])

export default ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState(store.get)

  const sideEffect = (set: typeof setCart) => (fun: React.SetStateAction<typeof cart>) => {
    return set( (prev) => {
      if(typeof fun === 'function'){
        store.set(fun(prev)) 
        return fun(prev)
      }
      store.set(fun)  
      return fun
    })
  }
  return <cartCtx.Provider value={[cart, sideEffect(setCart)]}>
    <Drawer justify='end'>
      <DrawerContent> 
        <Head />
        <Body children={children} />
      </DrawerContent>
      <DrawerNav> 
        <Nav>
          <Cart />
        </Nav>
      </DrawerNav>
    </Drawer>
  </cartCtx.Provider>
}

const STORAGE = 'cart'
let local: React.ContextType<typeof cartCtx>['0'] = {}
const store = {
  sub: () => {
    const value = localStorage.getItem(STORAGE)
    if(value === null){
      store.set({})
      local = {}
    } 
    else local = JSON.parse(value) as typeof local
    return () => { }
  },
  set: (item: React.ContextType<typeof cartCtx>['0']) => {
    try{
      localStorage.setItem(STORAGE, JSON.stringify(item))
    } catch(err) {
      console.error("SET STORAGE: ", err as string)
    }
  },
  get: () => {
    store.sub()
    return local
  }
} as const
