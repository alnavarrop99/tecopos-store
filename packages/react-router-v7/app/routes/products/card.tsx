import { Divider, CardBody, Badge, Card, CardImage, CardTitle, CardAction, Button, CardFigure, Indicator, IndicatorItem, CollapseTitle, CollapseContent, Collapse, Link } from "@tecopos/components"
import {type Product} from '@tecopos/db'
import cx from 'clsx'
import { Form } from "react-router"

type Props = Product['Res']

export const CardItem = ({ id, description, category, image, price, title, className }: Props & Pick<React.ComponentPropsWithRef<typeof Card>, 'className'>) => {
  return <Card className={cx("h-fit" , className)}>
    <CardFigure className="justify-center p-4">
      <Indicator className="max-w-[80%]" justify='start'>
        <IndicatorItem>
          <Badge color='ghost'>{category}</Badge>
        </IndicatorItem>
        <CardImage src={image} alt="shop-item" className="max-h-[60vw] md:max-h-[26rem]" />
      </Indicator>
    </CardFigure>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <Divider className="m-0 p-0 h-1" />
      <Collapse shape='plus' className="md:collapse-open">
        <CollapseTitle className="md:hidden">
          <Link href={undefined} className="font-semibold">See more details</Link>
        </CollapseTitle>
        <CollapseContent>
          <p className="text-gray-700">{description}</p>
        </CollapseContent>
      </Collapse>
      <CardAction className="justify-between items-center">
        <Badge color='success' className="before:font-bold before:content-['$'] md:text-lg p-3 md:p-4">{price}</Badge>
        <Form method="PATCH" action="/cart/addOne" replace><Button name={`${id}`} value='1' size='md' className="md:text-base" color='primary'>Add</Button></Form>
      </CardAction>
    </CardBody>
  </Card>
}
