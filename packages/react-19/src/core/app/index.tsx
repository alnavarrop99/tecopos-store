import { Head } from "./head"
import { Body } from "./body"

export default ({ children }: React.PropsWithChildren) => {
  return <>
    <Head />
    <Body> {children} </Body>
  </>
}
