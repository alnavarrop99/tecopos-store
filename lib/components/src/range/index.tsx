import { cva, type VariantProps } from "class-variance-authority";
import { createContext } from "react";

export const rangeProps = cva('range', {
  variants: {
    color: {
      none: '',
      primary: 'range-primary',
      secondary: 'range-secondary',
      accent: 'range-accent',
      info: 'range-info',
      success: 'range-success',
      warning: 'range-warning',
      error: 'range-error',
    },
    size: {
      lg: 'range-lg',
      md: 'range-md',
      sm: 'range-sm',
      xs: 'range-xs',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'none'
  },
});

export type rangeBase = VariantProps<typeof rangeProps> & {
  dir?: "top" | "bottom"
  measure?: boolean
}
type rangeGeneric = Omit<React.ComponentPropsWithRef<'input'>, keyof rangeBase | 'type' | 'min' | 'max'> & Required<Pick<React.ComponentPropsWithRef<'input'>, 'max' | 'min'>>
interface rangeProps extends rangeBase, rangeGeneric {}

const propsCtx = createContext<{ step: number, max: number } & Pick<rangeBase, 'dir'>>({ step: 0, max: 0 })
export const Range = ( { color, size, dir = 'bottom', measure, className, ...props }: rangeProps ) => {
  const step = props.step
  const max = props.max
  const range = <input {...props} type="range" className={rangeProps({ color, size, className })} />

  if(measure && step && !Number.isNaN(+step) && !Number.isNaN(+max)){
    return (<propsCtx.Provider value={{ step: +step, max: +max, dir: dir }}>
      <div>
        {dir === 'top' && <Measure />}
        {range}
        {dir === 'bottom' && <Measure />}
      </div>
    </propsCtx.Provider>)
  }

  return range
}

const measureProps = cva("flex w-full justify-between px-2 text-xs")
export const Measure = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return (<propsCtx.Consumer>
    {({ step, max }) => (<div {...props} className={measureProps({className})}>
      {Array.from({ length: max / step + 1 }).map( () => <span>|</span> )}
    </div>
    )}
  </propsCtx.Consumer>)
}
