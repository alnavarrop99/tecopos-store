import { cva, type VariantProps } from "class-variance-authority";

export const indicatorProps = cva('indicator', {
  variants: {
    justify: {
      start: 'indicator-start',
      center: 'indicator-center',
      end: 'indicator-end',
    },
    align: {
      top: 'indicator-top',
      middle: 'indicator-middle',
      bottom: 'indicator-bottom',
    }
  },
  defaultVariants: { },
});

export type indicatorBase = VariantProps<typeof indicatorProps>
interface indicatorProps extends indicatorBase, Omit<React.ComponentPropsWithRef<'div'>, keyof indicatorBase>{}

export const Indicator = ( { align, className, ...props }: indicatorProps ) => {
  return <div {...props} className={indicatorProps({ align, className })} />
}

const itemProps = cva('indicator-item')
export const IndicatorItem = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={itemProps({ className })} />
}
