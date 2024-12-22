import { Button, Card, CardAction, CardBody, CardFigure, CardImage, CardTitle, Badge } from "@tecopos/components"
import { type Product } from "@tecopos/db"
import { Minus, Plus, Trash } from "lucide-react"

type Props = Omit<Product['Res'], 'id'> & {
  quantity: number,
  addOne?: () => void
  minusOne?: () => void
  clear?: () => void
}

export const CardItem = ( { image, title, price, quantity, addOne, minusOne, clear }: Props ) => {
  return (<Card layout='full' className="w-full rounded-none before:!rounded-none">
      <CardFigure className="max-h-[16rem] w-full">
        <CardImage alt='carrusel-image' src={image} />
      </CardFigure>
    <CardBody className="justify-between">
      <CardTitle>{title} (${price})</CardTitle>
        <Badge className="mx-auto text-xl text-bold p-4" color='ghost' size='lg'>{quantity}</Badge>
      <CardAction className="justify-start">
        <Button variant='outline' size='md' layout='square' color='accent' className="shadow-lg hover:!text-base-100" onClick={addOne}><Plus /></Button>
        <Button variant='outline' size='md' layout='square' color='accent' className="shadow-lg hover:!text-base-100" onClick={minusOne}><Minus /></Button>
        <Button variant='outline' size='md' layout='square' color='error' className="self-end shadow-lg hover:!text-base-100" onClick={clear}><Trash /></Button>
      </CardAction>
    </CardBody>
  </Card>)
}
