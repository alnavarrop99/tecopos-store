import type { Route } from "./+types/app";
import { Button, Input, inputProps, Label, Spinner } from "@tecopos/components";
import { RotateCw, Search } from "lucide-react";
import { Form, useNavigation, useSubmit } from "react-router";

export const Body = ({ children, search }: React.PropsWithChildren<Pick<Route.ComponentProps['loaderData'], 'search'>>) => {
  const sub = useSubmit()
  const navigation = useNavigation()
  const isSearching = navigation.location && new URLSearchParams(navigation.location.search).has('category')

  return <main className="p-4 py-2 bg-gray-100">
    <Form role="search" 
      onChange={(ev) => sub(ev.currentTarget, { replace: !search })}
      onReset={() => sub('', { replace: !search } )}
    >
    <Label className={inputProps({ noBordered: false, className: 'gap-2 max-w-xl ms-auto mb-8 pr-0', size: 'md' })}>
      <Search />
      <Input name="category" className="flex-1" placeholder="category search" headless defaultValue={search} />
      { isSearching ? <Spinner className="mr-4" />: <Button type="reset" effect='ghost'><RotateCw /></Button> }
    </Label>
    </Form>
    {children}
  </main>
}
