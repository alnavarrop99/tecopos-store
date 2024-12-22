import { createContext, useState } from "react"

type Global = {
  carts: [ state: Record<number, number>, setState: React.Dispatch<Record<number, number>> ]
}
const initGlobal = {
  carts: [ {}, () => {} ]
} as const satisfies Global

export const globalCtx = createContext<Global>(initGlobal)

export default (props: React.PropsWithChildren) => {
  const [ carts, setCarts ] = useState<Global['carts']['0']>(store.get)

  return <globalCtx.Provider {...props} value={{
    carts: [ carts, sideEffect(setCarts) ]
  }} />
}

const sideEffect = (set: React.Dispatch<React.SetStateAction<Global['carts']['0']>>) => (fun: React.SetStateAction<Global['carts']['0']>) => {
  return set( (prev) => {
    if(typeof fun === 'function'){
      store.set(fun(prev)) 
      return fun(prev)
    }
    store.set(fun)  
    return fun
  })
}

const STORAGE = 'cart'
let local: Global['carts']['0'] = {}
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
  set: (item: typeof local) => {
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
