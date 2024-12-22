import db from "@tecopos/db"
import { Card, Skeleton } from "@tecopos/components"
import React, { Suspense, use } from "react"
import { CardItem } from "./card"
import { Load } from "../load"
import { cartCtx } from "../app"
import { useSearch } from "wouter"
import { Empty } from "./empty"

export default () => {
  const search = new URLSearchParams(Object.fromEntries([useSearch().split("=")]))
  let list;

  if(search.has('category')){
    list = db.product.category(search.get('category')!)
  } else {
    list = db.product.all('')
  }

  return <Suspense fallback={<Load><ProductsLoading /></Load>}>
    <Products list={list} />
  </Suspense>
}

const Wrap = (props: React.PropsWithChildren) => <main aria-label="products list" className="flex flex-wrap gap-4 [&>*]:flex-1" {...props} />

const Products = ( {list}:{ list: ReturnType<typeof db.product.all> } ) => {
  const products = use(list)
  const [ cart, setCart ] = use(cartCtx)

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

const LIST = 12
const ProductsLoading = ( ) => {
  return <Wrap>
    {Array.from({length: LIST}).map( (_, index) => (
      <Card key={index} className="min-w-[20rem] flex-1">
        <Skeleton className="min-h-[28rem]" />
      </Card>
    ) )}
  </Wrap>
}
