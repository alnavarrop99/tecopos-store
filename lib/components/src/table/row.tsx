import { cva, type VariantProps } from "class-variance-authority"

export const rowProps = cva('', {
  variants: {
    hover: {
      true: 'hover',
      false: ''
    }
  }
})
type rowBase = VariantProps<typeof rowProps>
interface rowProps extends rowBase, Omit<React.ComponentPropsWithRef<'tr'>, keyof rowBase> {}

export const Row = ({ hover, className, ...props }: rowProps) => {
  return <tr {...props} className={rowProps({hover, className})} />
}
