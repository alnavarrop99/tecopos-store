import { Button, Input, inputProps, Label } from "@tecopos/components";
import { RotateCw, Search } from "lucide-react";
import { useLocation, useSearch } from "wouter";

export const Body = ({ children }: React.PropsWithChildren) => {
  const [ _, navigate ] = useLocation()
  const search = new URLSearchParams(Object.fromEntries([useSearch().split("=")]))
  return <main className="p-4 py-2 bg-gray-100">
    <Label className={inputProps({ noBordered: false, className: 'gap-2 max-w-xl ms-auto mb-8 pr-0', size: 'md' })}>
      <Search />
      <Input className="flex-1" placeholder="category search" headless value={search.get('category') || ''} onChange={handleSearch} />
      <Button effect='ghost' onClick={() => navigate('/')}><RotateCw /></Button>
    </Label>
    {children}
  </main>

  function handleSearch(ev: React.ChangeEvent<React.ComponentRef<typeof Input>>) {
    if(!ev.target.value) {
      navigate('/')
      return;
    }
    navigate(`?${new URLSearchParams({ category: ev.target.value })}`)
  }
}
