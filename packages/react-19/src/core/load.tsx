import { Card, CardBody, CardFigure, CardTitle, Hero, HeroSection, Progressive } from "@tecopos/components"
import { Store } from "lucide-react"

export const Load = ({ children }: React.PropsWithChildren) => {
  return (<Hero className="min-h-[80dvh]">
      <Card layout='full' className="w-full">
        <CardFigure className="w-full"> <Store className="size-full" /> </CardFigure>
        <CardBody className="justify-end">
          <CardTitle> {children} </CardTitle>
          <Progressive className="rounded-xl h-8" />
        </CardBody>
      </Card>
  </Hero>)
}
