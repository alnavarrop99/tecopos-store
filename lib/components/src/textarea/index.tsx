import { cva, type VariantProps } from "class-variance-authority";

export const textareaProps = cva('textarea', {
  variants: {
    size: {
      lg: 'textarea-lg',
      md: 'textarea-md',
      sm: 'textarea-sm',
      xs: 'textarea-xs',
    },
    noBordered: {
      true: '',
      false: 'textarea-bordered'
    },
    color: {
      none: '',
      primary: 'textarea-primary',
      secondary: 'textarea-secondary',
      accent: 'textarea-accent',
      success: 'textarea-success',
      warning: 'textarea-warning',
      info: 'textarea-info',
      error: 'textarea-error',
    },
    effect: {
      none: '',
      ghost: 'textarea-ghost',
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'none'
  },
})

export type textareaBase = VariantProps<typeof textareaProps> & {}
interface textareaProps extends textareaBase, Omit<React.ComponentPropsWithRef<'textarea'>, keyof textareaBase>{}

export const Textarea = ( { color, noBordered = false, effect, size, className, ref: refNode, ...props }: textareaProps ) => {
  return <textarea {...props} className={textareaProps({ color, noBordered, effect, size, className })} />
}
