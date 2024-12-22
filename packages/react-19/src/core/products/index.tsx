import db from "@tecopos/db"
import { Card, Skeleton } from "@tecopos/components"
import React, { Suspense, use } from "react"
import { CardItem } from "./card"
import { Load } from "../load"

export default () => {
  const list = db.product.all()
  return <Suspense fallback={<Load><ProducsLoading /></Load>}>
    <Products list={list} />
  </Suspense>
}

const Wrap = (props: React.PropsWithChildren) => <main aria-label="products list" className="flex flex-wrap gap-4 [&>*]:flex-1" {...props} />

const Products = ( {list}:{ list: ReturnType<typeof db.product.all> } ) => {
  const products = use(list)
  return <Wrap>
    {products.map( ({ id, ...data }) => (
      <CardItem key={id} {...data} className="min-w-[24rem]" />
    ))} 
  </Wrap>
}

const LIST = 12
const ProducsLoading = ( ) => {
  return <Wrap>
    {Array.from({length: LIST}).map( () => (
      <Card className="min-w-[20rem] flex-1">
        <Skeleton className="min-h-[28rem]" />
      </Card>
    ) )}
  </Wrap>
}
