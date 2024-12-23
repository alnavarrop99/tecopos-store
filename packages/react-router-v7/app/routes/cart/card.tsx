import { Button, Card, CardAction, CardBody, CardFigure, CardImage, CardTitle, Badge } from "@tecopos/components"
import { type Product } from "@tecopos/db"
import { Minus, Plus, Trash } from "lucide-react"
import { Form } from "react-router"

type Props = Product['Res'] & {
  quantity: number,
}

export const Item = ( { image, title, price, quantity, id }: Props ) => {
  return (
    <Card layout='full' className="w-full rounded-none before:!rounded-none">
      <CardFigure className="max-h-[16rem] w-full">
        <CardImage alt='carrusel-image' src={image} />
      </CardFigure>
      <CardBody className="justify-between">
        <CardTitle>{title} (${price})</CardTitle>
          <Badge className="mx-auto text-xl text-bold p-4" color='ghost' size='lg'>{quantity}</Badge>
        <CardAction className="justify-start">
          <Form method="PATCH" action="/cart/addOne" replace><Button name={`${id}`} value="1" variant='outline' size='md' layout='square' color='accent' className="shadow-lg hover:!text-base-100"><Plus /></Button></Form>
          <Form method="PATCH" action="/cart/minusOne" replace><Button name={`${id}`} value="2" variant='outline' size='md' layout='square' color='accent' className="shadow-lg hover:!text-base-100"><Minus /></Button></Form>
          <Form method="DELETE" action="/cart/clear" replace><Button name={`${id}`} value="3" variant='outline' size='md' layout='square' color='error' className="self-end shadow-lg hover:!text-base-100"><Trash /></Button></Form>
        </CardAction>
      </CardBody>
    </Card>
  )
}
