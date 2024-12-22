import { DrawerBtn } from "@tecopos/components";
import { X } from 'lucide-react'

export const Nav = ({ children }: React.PropsWithChildren) => <nav className="relative w-full md:w-[50vw] lg:w-[35vw] h-full">
  <div className="sticky top-0 z-50 bg-gray-100 flex justify-between items-center p-4 py-4">
    <h1 className="font-semibold text-2xl text-center">Cart Shop</h1>
    <DrawerBtn layout='circle' size='xs' color='error' className="text-gray-200 mx-4"> <X size='1rem' /> </DrawerBtn>
  </div>
  {children}
</nav>
