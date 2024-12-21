import { cva, type VariantProps } from "class-variance-authority";

export const radioProps = cva('radio', {
  variants: {
    size: {
      lg: 'radio-lg',
      md: 'radio-md',
      sm: 'radio-sm',
      xs: 'radio-xs',
    },
    color: {
      none: '',
      primary: 'radio-primary',
      secondary: 'radio-secondary',
      accent: 'radio-accent',
      success: 'radio-success',
      warning: 'radio-warning',
      info: 'radio-info',
      error: 'radio-error',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'none'
  },
})

export type radioBase = VariantProps<typeof radioProps> & { }
interface radioProps extends radioBase, Omit<React.ComponentPropsWithRef<'input'>, keyof radioBase | 'type'>{}

export const Radio = ( { color, size, className, ref: refNode, ...props }: radioProps ) => {
  return <input {...props} type="radio" className={radioProps({ color, size, className })} />
}
