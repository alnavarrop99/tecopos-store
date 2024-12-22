import { cva, cx, type VariantProps } from "class-variance-authority";

export const inputProps = cva('input', {
  variants: {
    size: {
      lg: 'input-lg',
      md: 'input-md',
      sm: 'input-sm',
      xs: 'input-xs',
    },
    noBordered: {
      true: '',
      false: 'input-bordered'
    },
    color: {
      none: '',
      primary: 'input-primary',
      secondary: 'input-secondary',
      accent: 'input-accent',
      success: 'input-success',
      warning: 'input-warning',
      info: 'input-info',
      error: 'input-error',
    },
    effect: {
      none: '',
      ghost: 'input-ghost',
    }
  },
  defaultVariants: {
    noBordered: true,
    size: 'md',
    color: 'none'
  },
})

export type inputBase = VariantProps<typeof inputProps> & { 
  type?: Exclude<React.ComponentPropsWithRef<'input'>['type'], 'radio' | 'image' | 'color' | 'button' | 'checkbox' | 'file' | 'hidden' | 'range' | 'reset' | 'submit'>
  headless?: boolean
}
interface inputProps extends inputBase, Omit<React.ComponentPropsWithRef<'input'>, keyof inputBase>{}

export const Input = ( { color, noBordered, type, effect, size, className, ref: refNode, headless, ...props }: inputProps ) => {
  return <input {...props} type={type} className={cx({ [ inputProps({ color, noBordered, effect, size }) ]: !headless }, className)} />
}
