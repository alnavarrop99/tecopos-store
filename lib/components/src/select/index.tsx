import { cva, cx, type VariantProps } from "class-variance-authority";

export const selectProps = cva('select', {
  variants: {
    size: {
      lg: 'select-lg',
      md: 'select-md',
      sm: 'select-sm',
      xs: 'select-xs',
    },
    noBordered: {
      true: '',
      false: 'select-bordered'
    },
    color: {
      none: '',
      primary: 'select-primary',
      secondary: 'select-secondary',
      accent: 'select-accent',
      success: 'select-success',
      warning: 'select-warning',
      info: 'select-info',
      error: 'select-error',
    },
    effect: {
      none: '',
      ghost: 'select-ghost',
    }
  },
  defaultVariants: {
    noBordered: false,
    size: 'md',
    color: 'none'
  },
})

export type selectBase = VariantProps<typeof selectProps> & {
  headless?: boolean
}
interface selectProps extends selectBase, Omit<React.ComponentPropsWithRef<'select'>, keyof selectBase>{}

export const Select = ( { color, noBordered, headless, effect, size, className, ref: refNode, ...props }: selectProps ) => {
  return <select {...props} className={cx({ [ selectProps({ color, noBordered, effect, size }) ]: !headless }, className)} />
}

export const SelectItem = ( props: React.ComponentPropsWithRef<'option'> ) => {
  return <option {...props} />
}

