import db from "@tecopos/db"
import { Suspense, use } from "react"
import { CardItem } from "./card"
import { Load } from "../../load"

export default () => {
  const list = db.product.all()
  return <Suspense fallback={<Load> Loading products ... </Load>}>
  <Products list={list} />
  </Suspense>
}

const Products = ( {list}:{ list: ReturnType<typeof db.product.all> } ) => {
  const products = use(list)
  return <main aria-label="products list" className="flex flex-wrap gap-4 [&>*]:flex-auto">
    {products.map( ({ id, ...data }) => (
      <CardItem key={id} {...data} />
    ) )} 
  </main>
}
