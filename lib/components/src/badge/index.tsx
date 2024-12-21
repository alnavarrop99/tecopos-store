import { cva, type VariantProps } from "class-variance-authority";

export const badgeProps = cva('badge', {
  variants: {
    color: {
      none: '',
      neutral: 'badge-neutral',
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      accent: 'badge-accent',
      ghost: 'badge-ghost',
      info: 'badge-info',
      success: 'badge-success',
      warning: 'badge-warning',
      error: 'badge-error',
    },
    outline: {
      true: 'badge-outline',
      false: '',
    },
    size: {
      lg: 'badge-lg',
      md: 'badge-md',
      sm: 'badge-sm',
      xs: 'badge-xs',
    },
  },
  defaultVariants: {
    color: 'none',
    outline: false,
    size: 'md',
  },
});

export type badgeBase = VariantProps<typeof badgeProps>
interface badgeProps extends badgeBase, Omit<React.ComponentPropsWithRef<'div'>, keyof badgeBase>{}

export const Badge = ( { color, outline, size, className, ...props }: badgeProps ) => {
  return <div {...props} className={badgeProps({ color, outline, size, className })} />
}
