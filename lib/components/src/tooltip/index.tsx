import { cva, type VariantProps } from "class-variance-authority";

export const tooltipProps = cva('tooltip', {
  variants: {
    position: {
      top: 'tooltip-top',
      bottom: 'tooltip-bottom',
      left: 'tooltip-left',
      right: 'tooltip-right',
    },
    color: {
      primary: 'tooltip-primary',
      secondary: 'tooltip-secondary',
      accent: 'tooltip-accent',
      info: 'tooltip-info',
      success: 'tooltip-success',
      warning: 'tooltip-warning',
      error: 'tooltip-error',
    },
    open: {
      true: 'tooltip-open',
      false: ''
    },
  },
  defaultVariants: {
    position: 'top',
  },
})

export type tooltipBase = VariantProps<typeof tooltipProps> & {
  label: string
}
interface tooltipProps extends tooltipBase, Omit<React.ComponentPropsWithRef<'div'>, keyof tooltipBase>{}

export const Tooltip = ( { color, open, position, className, label, ...props }: tooltipProps ) => {
  return <div {...props} data-tip={label} className={tooltipProps({ color, open, position, className })} />
}
