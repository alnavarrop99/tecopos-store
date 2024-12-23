import { Divider, CardBody, Badge, Card, CardImage, CardTitle, CardAction, Button, CardFigure, Indicator, IndicatorItem, CollapseTitle, CollapseContent, Collapse, Link } from "@tecopos/components"
import {type Product} from '@tecopos/db'
import cx from 'clsx'
import { useFetcher } from "react-router"

type Props = Product['Res']

export const CardItem = ({ id, description, category, image, price, title, className }: Props & Pick<React.ComponentPropsWithRef<typeof Card>, 'className'>) => {
  const addOne = useFetcher({ key: 'addOne' })
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
        <addOne.Form method="PATCH" action="/"><Button name={`${id}`} value='addOne' size='md' className="md:text-base" color='primary'>Add</Button></addOne.Form>
      </CardAction>
    </CardBody>
  </Card>
}
