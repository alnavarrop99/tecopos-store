import db, { Product } from '@tecopos/db'
import { Carrusel, CarruselItem, Skeleton } from "@tecopos/components"
import { Suspense, use } from "react"
import { CardItem } from './card'
import { cartCtx } from '../app'
import { Empty } from './empty'

export default () => {
  const carts = db.product.all(new URLSearchParams({ sort: 'asc' } satisfies Product['Query']))
  return (
    <Suspense fallback={<CartLoading/>}>
      <Cart list={carts} />
    </Suspense>
  )
}

const Cart = ({ list }: { list: ReturnType<typeof db.product.all> }) => {
  const [ cart, setCart ] = use(cartCtx)
  const products = use(list)
  const filterList = products.filter(({ id }) => (id in cart)).map(({ id, ...data }) => ({ id, ...data, quantity: cart[id] }))

  if(!filterList.length){
    return <Empty />
  }

  return (<Carrusel className='w-full' orientation='vertical'>
    {[...filterList].map(( { id, ...data } ) => (
      <CarruselItem key={id} itemId={`${id}`}>
        <CardItem {...data} addOne={addOne(id)} minusOne={minusOne(id)} clear={clear(id)} />
      </CarruselItem>
    ))}
  </Carrusel>)

  function addOne(id: number) {
    return () => {
      setCart({ ...cart , [id]: (cart?.[id] ?? 0) + 1 }) 
    }
  }

  function minusOne(id: number) {
    if(id in cart && cart[id] <= 1){ 
      return clear(id)
    }
    return () => {
      setCart({ ...cart , [id]: (cart?.[id] ?? 0) - 1 }) 
    }
  }

  function clear(id: number) {
    return () => {
      if(id in cart){ 
        const { [id]: _ , ...rest} = cart
        setCart(rest) 
      }
    }
  }
}

const LIST = 3
const CartLoading = ( ) => {
  return <div className='flex flex-col'>
    {Array.from({length: LIST}).map( (_, index) => (
      <Skeleton key={index} className="min-h-[16rem] flex-1 rounded-none" />
    ) )}
  </div>
}
