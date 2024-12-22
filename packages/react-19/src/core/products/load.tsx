import { Card, Skeleton } from "@tecopos/components"
import { Wrap } from "./wrap"

const LIST = 12
export const Loading = ( ) => {
  return <Wrap>
    {Array.from({length: LIST}).map( (_, index) => (
      <Card key={index} className="min-w-[20rem] flex-1">
        <Skeleton className="min-h-[28rem]" />
      </Card>
    ) )}
  </Wrap>
}
