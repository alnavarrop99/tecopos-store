import { Button, Card, CardAction, CardBody, CardFigure, CardImage, CardTitle, Badge } from "@tecopos/components"
import { type Product } from "@tecopos/db"
import { Minus, Plus, Trash } from "lucide-react"
import { Form, useFetcher } from "react-router"

type Props = Product['Res'] & {
  quantity: number,
}

export const Item = ( { image, title, price, quantity, id }: Props ) => {
  const addOne = useFetcher({ key: 'addOne' })
  const minusOne = useFetcher({ key: 'minusOne' })
  const clear = useFetcher({ key: 'clear' })
  return (
    <Card layout='full' className="w-full rounded-none before:!rounded-none">
      <CardFigure className="max-h-[16rem] w-full">
        <CardImage alt='carrusel-image' src={image} />
      </CardFigure>
      <CardBody className="justify-between">
        <CardTitle>{title} (${price})</CardTitle>
          <Badge className="mx-auto text-xl text-bold p-4" color='ghost' size='lg'>{quantity}</Badge>
        <CardAction className="justify-start">
          <addOne.Form method="PATCH" action="/"><Button name={`${id}`} value="addOne" variant='outline' size='md' layout='square' color='accent' className="shadow-lg hover:!text-base-100"><Plus /></Button></addOne.Form>
          <minusOne.Form method="PATCH" action="/"><Button name={`${id}`} value="minusOne" variant='outline' size='md' layout='square' color='accent' className="shadow-lg hover:!text-base-100"><Minus /></Button></minusOne.Form>
          <clear.Form method="DELETE" action="/"><Button name={`${id}`} value="clear" variant='outline' size='md' layout='square' color='error' className="self-end shadow-lg hover:!text-base-100"><Trash /></Button></clear.Form>
        </CardAction>
      </CardBody>
    </Card>
  )
}
