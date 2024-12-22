import { Button, DrawerBtn } from "@tecopos/components";
import { DollarSign, X } from 'lucide-react'

export const Nav = ({ children }: React.PropsWithChildren) => <nav className="relative w-full md:w-[50vw] lg:w-[35vw] h-full">
  <div className="bg-gray-100 flex gap-2 justify-start items-center p-4 py-4">
    <h1 className="font-semibold text-2xl text-center">Cart Shop</h1>
    <DrawerBtn layout='circle' size='xs' color='error' className="text-gray-200 mx-4 ms-auto"> <X size='1rem' /> </DrawerBtn>
  </div>
  <Button variant='outline' color='neutral' size='md' layout='block' className="bg-base-100 text-lg border-0 rounded-none"><DollarSign size='1.2rem' /> Pay now</Button>
  {children}
</nav>
