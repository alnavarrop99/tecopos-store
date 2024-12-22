import db from "@tecopos/db"
import { Suspense, use } from "react"
import { CardItem } from "./card"
import { MainLoading } from "../load"
import { useSearch } from "wouter"
import { Empty } from "./empty"
import { Loading } from "./load"
import { Wrap } from "./wrap"
import { globalCtx } from "../../global"

export default () => {
  const search = new URLSearchParams(Object.fromEntries([useSearch().split("=")]))
  let list;

  if(search.has('category')){
    list = db.product.category(search.get('category')!)
  } else {
    list = db.product.all('')
  }

  return <Suspense fallback={<MainLoading><Loading /></MainLoading>}>
    <Products list={list} />
  </Suspense>
}


const Products = ( {list}:{ list: ReturnType<typeof db.product.all> } ) => {
  const products = use(list)
  const [ cart, setCart ] = use(globalCtx).carts

  if(!products.length){
    return <Empty />
  }

  return <Wrap>
    {products.map( ({ id, ...data }) => (
      <CardItem key={id} {...data} onAdd={localAdd(id)} className="min-w-[24rem]" />
    ))} 
  </Wrap>

  function localAdd(id: number) {
    return async () => {
      setCart({ ...cart , [id]: (cart?.[id] ?? 0) + 1 }) 
      await db.cart.add({
        userId: 1,
        date: `${new Date().toISOString}`,
        products: [ { quantity: 1, productId: id } ] 
      })
    }
  }
}

