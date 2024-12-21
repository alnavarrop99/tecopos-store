import { cva, type VariantProps } from "class-variance-authority";

export const stackProps = cva('stack')
export type stackBase = VariantProps<typeof stackProps>
interface stackProps extends stackBase, Omit<React.ComponentPropsWithRef<'div'>, keyof stackBase>{}

export const Stack = ( { className, ...props }: stackProps ) => {
  return <div {...props} className={stackProps({className})} />
}
