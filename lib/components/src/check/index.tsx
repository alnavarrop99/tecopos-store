import { cva, type VariantProps } from "class-variance-authority";
import { useRef } from "react";

export const checkProps = cva('checkbox', {
  variants: {
    size: {
      lg: 'checkbox-lg',
      md: 'checkbox-md',
      sm: 'checkbox-sm',
      xs: 'checkbox-xs',
    },
    color: {
      none: '',
      primary: 'checkbox-primary',
      secondary: 'checkbox-secondary',
      accent: 'checkbox-accent',
      success: 'checkbox-success',
      warning: 'checkbox-warning',
      info: 'checkbox-info',
      error: 'checkbox-error',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'none'
  },
})

export type checkBase = VariantProps<typeof checkProps> & {
  indeterminate?: boolean
}
interface checkProps extends checkBase, Omit<React.ComponentPropsWithRef<'input'>, keyof checkBase | 'type'>{}

export const Check = ( { color, size, indeterminate, className, ref: refNode, ...props }: checkProps ) => {
  const ref = useRef<React.ComponentRef<'input'>>(null)

  if(ref?.current && indeterminate) ref.current.indeterminate = indeterminate
  const refCall: React.RefCallback<React.ComponentRef<'input'>> = (node) => {
    if(refNode && typeof refNode === 'function') refNode?.(ref.current = node)
    else if(refNode) refNode.current = ref.current = node
  }

  return <input {...props} ref={refCall} type="checkbox" className={checkProps({ color, size, className })} />
}
