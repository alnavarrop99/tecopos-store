import { Skeleton } from "@tecopos/components"

const LIST = 3
export const Loading = ( ) => {
  return <div className='flex flex-col'>
    {Array.from({length: LIST}).map( (_, index) => (
      <Skeleton key={index} className="min-h-[16rem] flex-1 rounded-none" />
    ) )}
  </div>
}
