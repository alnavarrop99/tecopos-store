import type { Route } from '../app/+types/app'
import { Button, Carrusel, CarruselItem } from "@tecopos/components"
import { Item } from './card'
import { Empty } from './empty'
import { DollarSign } from 'lucide-react'

export default ({ list: products, cart }: Route.ComponentProps['loaderData'] ) => {
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
        <Item id={id} {...data} />
      </CarruselItem>
    ))}
    </Carrusel>
  </>)
}

