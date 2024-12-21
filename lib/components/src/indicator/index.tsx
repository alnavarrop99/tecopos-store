import { cva, type VariantProps } from "class-variance-authority";

export const indicatorProps = cva('btn', {
  variants: {
    align: {
      start: 'indicator-start',
      center: 'indicator-center',
      end: 'indicator-end',
    },
    justify: {
      top: 'indicator-top',
      middle: 'indicator-middle',
      bottom: 'indicator-bottom',
    }
  },
  defaultVariants: {
    align: 'end',
    justify: 'top'
  },
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
