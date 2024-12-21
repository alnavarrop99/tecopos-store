import { cva, type VariantProps } from "class-variance-authority";

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
    size: 'md',
    color: 'none'
  },
})

export type selectBase = VariantProps<typeof selectProps> & { }
interface selectProps extends selectBase, Omit<React.ComponentPropsWithRef<'select'>, keyof selectBase>{}

export const Select = ( { color, noBordered = false, effect, size, className, ref: refNode, ...props }: selectProps ) => {
  return <select {...props} className={selectProps({ color, noBordered, effect, size, className })} />
}

export const SelectItem = ( props: React.ComponentPropsWithRef<'option'> ) => {
  return <option {...props} />
}

