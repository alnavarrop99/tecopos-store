import { cva, type VariantProps } from "class-variance-authority";
import { useRef } from "react";

export const switchProps = cva('toggle', {
  variants: {
    size: {
      lg: 'toggle-lg',
      md: 'toggle-md',
      sm: 'toggle-sm',
      xs: 'toggle-xs',
    },
    color: {
      none: '',
      primary: 'toggle-primary',
      secondary: 'toggle-secondary',
      accent: 'toggle-accent',
      success: 'toggle-success',
      warning: 'toggle-warning',
      info: 'toggle-info',
      error: 'toggle-error',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'none'
  },
})

export type switchBase = VariantProps<typeof switchProps> & { 
  indeterminate?: boolean
}
interface switchProps extends switchBase, Omit<React.ComponentPropsWithRef<'input'>, keyof switchBase | 'type'>{}

export const Switch = ( { indeterminate, color, size, className, ref: refNode, ...props }: switchProps ) => {
  const ref = useRef<React.ComponentRef<'input'>>(null)

  if(ref?.current && indeterminate) ref.current.indeterminate = indeterminate
  const refCall: React.RefCallback<React.ComponentRef<'input'>> = (node) => {
    if(refNode && typeof refNode === 'function') refNode?.(ref.current = node)
    else if(refNode) refNode.current = ref.current = node
  }

  return <input {...props} ref={refCall} type="checkbox" className={switchProps({ color, size, className })} />
}
