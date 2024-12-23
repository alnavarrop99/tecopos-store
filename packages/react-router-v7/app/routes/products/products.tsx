import type { Route } from "./+types/products"
import { type Product } from "@tecopos/db"
import { CardItem } from "./card"
import { Empty } from "./empty"
import { Wrap } from "./wrap"

export default ({ matches: { "1": { data: { list: products } } } }: Route.ComponentProps) => {
  if(!products.length){
    return <Empty />
  }

  return <Products list={products} />
}

const Products = ( { list: products }: { list: Array<Product['Res']> } ) => {
  return (
    <Wrap>
      {products.map( (data) => (
        <CardItem key={data.id} {...data} className="min-w-[24rem]" />
      ))} 
    </Wrap>
  )
}
