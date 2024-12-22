import { cva, type VariantProps } from "class-variance-authority";

export const buttonProps = cva('btn', {
  variants: {
    color: {
      none: '',
      neutral: 'btn-neutral',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
      info: 'btn-info',
      success: 'btn-success',
      warning: 'btn-warning',
      error: 'btn-error',
    },
    variant: {
      default: '',
      link: 'btn-link',
      outline: 'btn-outline',
    },
    active: {
      true: 'btn-active',
      false: ''
    },
    disabled: {
      true: 'btn-disabled',
      false: '',
    },
    effect: {
      glass: 'glass',
      ghost: 'btn-ghost',
      noAnimation: 'no-animation',
    },
    layout: {
      wide: 'btn-wide',
      block: 'btn-block',
      circle: 'btn-circle',
      square: 'btn-square',
    },
    size: {
      lg: 'btn-lg',
      md: 'btn-md',
      sm: 'btn-sm',
      xs: 'btn-xs',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'none'
  },
});

export type buttonBase = VariantProps<typeof buttonProps>
interface buttonProps extends buttonBase, Omit<React.ComponentPropsWithRef<'button'>, keyof buttonBase>{}

export const Button = ( { variant, layout, color, active, disabled, effect, size, className, ...props }: buttonProps ) => {
  return <button {...props} className={buttonProps({ color, layout, active, disabled, variant, effect, size, className })} />
}
