import { cva, type VariantProps } from "class-variance-authority";

export const dividerProps = cva('divider', {
  variants: {
    color: {
      none: '',
      neutral: 'divider-neutral',
      primary: 'divider-primary',
      secondary: 'divider-secondary',
      accent: 'divider-accent',
      info: 'divider-info',
      success: 'divider-success',
      warning: 'divider-warning',
      error: 'divider-error',
    },
    dir: {
      horizontal: 'divider-horizontal',
      vertical: 'divider-vertical',
    },
  },
  defaultVariants: {
    color: 'none'
  },
})

export type dividerBase = VariantProps<typeof dividerProps>
interface dividerProps extends dividerBase, Omit<React.ComponentPropsWithRef<'div'>, keyof dividerBase>{}

export const Divider = ( { color, dir, className, ...props }: dividerProps ) => {
  return <div {...props} className={dividerProps({ color, dir, className })} />
}

const itemProps = cva('divider', {
  variants: {
    align: {
      start: 'divider-start',
      center: '',
      end: 'divider-end',
    },
  },
  defaultVariants: {
    align: 'center'
  },
});

export const DividerItem = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={itemProps({ className })} />
}
