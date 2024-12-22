import { Progressive } from "@tecopos/components"
import { Store } from "lucide-react"

export const MainLoading = ({ children }: React.PropsWithChildren) => {
  return (<div className="relative">
      <Store className="w-full h-full absolute text-gray-500" />
      {children}
      <Progressive color='success' className="fixed left-0 top-0 h-2" />
  </div>)
}
