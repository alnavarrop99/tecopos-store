import { Button, Input, inputProps, Label } from "@tecopos/components";
import { RotateCw, Search } from "lucide-react";
import { useSearchParams } from "react-router";

export const Body = ({ children }: React.PropsWithChildren) => {
  const [ search, setSearch ] = useSearchParams()
  return <main className="p-4 py-2 bg-gray-100">
    <Label className={inputProps({ noBordered: false, className: 'gap-2 max-w-xl ms-auto mb-8 pr-0', size: 'md' })}>
      <Search />
      <Input className="flex-1" placeholder="category search" headless value={search.get('category') || ''} onChange={handleSearch} />
      <Button effect='ghost' onClick={handleReset}><RotateCw /></Button>
    </Label>
    {children}
  </main>

  function handleSearch(ev: React.ChangeEvent<React.ComponentRef<typeof Input>>) {
    if(!ev.target.value) {
      return handleReset()
    }
    setSearch({ category: ev.target.value })
  }

  function handleReset() {
    setSearch((q) => {
      q.delete('category')
      return q
    })
  }
}
