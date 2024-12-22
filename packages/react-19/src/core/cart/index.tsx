import db, { Product } from '@tecopos/db'
import { Button, Carrusel, CarruselItem } from "@tecopos/components"
import { Suspense, use } from "react"
import { Item } from './card'
import { Empty } from './empty'
import { Loading } from './load'
import { DollarSign } from 'lucide-react'
import { globalCtx } from '../../global'

export default () => {
  const carts = db.product.all(new URLSearchParams({ sort: 'asc' } satisfies Product['Query']))
  return (
    <Suspense fallback={<Loading/>}>
      <Cart list={carts} />
    </Suspense>
  )
}

const Cart = ({ list }: { list: ReturnType<typeof db.product.all> }) => {
  const [ cart, setCart ] = use(globalCtx).carts
  const products = use(list)
  const filterList = products.filter(({ id }) => (id in cart)).map(({ id, ...data }) => ({ id, ...data, quantity: cart[id] }))
  const amount = filterList.reduce( (acc, el) => ({ ...el, price: acc.price + (cart[el.id] * el.price) }), { price: 0 } ).price

  if(!filterList.length){
    return <Empty />
  }

  return (<>
    { filterList.length &&
      <Button variant='outline' color='neutral' size='md' layout='block' className="bg-base-100 text-lg border-0 rounded-none"><DollarSign size='1.2rem' /> {Math.ceil(amount)}</Button> 
    }
    <Carrusel className='w-full' orientation='vertical'>
    {[...filterList].map(( { id, ...data } ) => (
      <CarruselItem key={id} itemId={`${id}`}>
        <Item {...data} addOne={addOne(id)} minusOne={minusOne(id)} clear={clear(id)} />
      </CarruselItem>
    ))}
    </Carrusel>
  </>)

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

