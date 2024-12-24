import { DrawerBtn, Spinner } from "@tecopos/components";
import { X } from 'lucide-react'
import { useFetchers } from "react-router";

export const Nav = ({ children }: React.PropsWithChildren) => {
  const navigation = useFetchers()?.[0]
  return (
    <nav className="relative w-full md:w-[50vw] lg:w-[35vw] h-full">
      <div className="bg-gray-100 flex gap-2 justify-start items-center p-4 py-4">
        <h1 className="font-semibold text-2xl text-center flex items-center gap-1">
          Cart Shop {!!navigation?.state && navigation.state !== 'idle' &&  <Spinner /> }
        </h1>
        <DrawerBtn layout='circle' size='xs' color='error' className="text-gray-200 mx-4 ms-auto"> <X size='1rem' /> </DrawerBtn>
      </div>
      {children}
    </nav>
  )
}
