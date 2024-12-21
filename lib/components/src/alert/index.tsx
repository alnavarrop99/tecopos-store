import { cva, type VariantProps } from "class-variance-authority";

export const alertProps = cva('alert', {
  variants: {
    color: {
      none: '',
      info: 'alert-info',
      success: 'alert-success',
      warning: 'alert-warning',
      error: 'alert-error',
    },
  },
  defaultVariants: {
    color: 'none'
  },
})

export type alertBase = VariantProps<typeof alertProps>
interface alertProps extends alertBase, Omit<React.ComponentPropsWithRef<'div'>, keyof alertBase>{}

export const Alert = ( { color, className, ...props }: alertProps ) => {
  return <div {...props} role="alert" className={alertProps({ color, className })} />
}
