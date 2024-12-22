import { Divider, CardBody, Badge, Card, CardImage, CardTitle, CardAction, Button, CardFigure, Indicator, IndicatorItem, CollapseTitle, CollapseContent, Collapse, Link } from "@tecopos/components"
import {type Product} from '@tecopos/db'

type Props = Omit<Product['Res'], "id">

export const CardItem = ({ description, category, image, price, title }: Props) => {
  return <Card>
    <CardFigure className="justify-center p-4">
      <Indicator className="max-w-[80%]" justify='start'>
        <IndicatorItem>
          <Badge color='ghost'>{category}</Badge>
        </IndicatorItem>
        <CardImage src={image} alt="shop-item" className="max-h-40" />
      </Indicator>
    </CardFigure>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <Divider className="m-0 p-0 h-1" />
      <Collapse shape='plus' className="md:collapse-open">
        <CollapseTitle className="md:hidden">
          <Link href={undefined}>See more details</Link>
        </CollapseTitle>
        <CollapseContent>
          <p>{description}</p>
        </CollapseContent>
      </Collapse>
      <CardAction className="justify-between">
        <Badge color='success' className="before:font-bold before:content-['$']">{price}</Badge>
        <Button size='sm' color='primary'>Add</Button>
      </CardAction>
    </CardBody>
  </Card>
}
