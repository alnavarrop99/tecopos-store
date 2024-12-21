import { cva, type VariantProps } from "class-variance-authority";

export const kbdProps = cva('kbd', {
  variants: {
    size: {
      lg: 'kbd-lg',
      md: 'kbd-md',
      sm: 'kbd-sm',
      xs: 'kbd-xs',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type kbdBase = VariantProps<typeof kbdProps>
interface kbdProps extends kbdBase, Omit<React.ComponentPropsWithRef<'kbd'>, keyof kbdBase>{}

export const Kbd = ( { size, className, ...props }: kbdProps ) => {
  return <kbd {...props} className={kbdProps({ size, className })} />
}
