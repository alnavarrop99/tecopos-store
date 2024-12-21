import { cva, type VariantProps } from "class-variance-authority";

export const statsProps = cva('stats shadow', {
  variants: {
    dir: {
      horizontal: 'stats-horizontal',
      vertical: 'stats-vertical',
    },
  },
  defaultVariants: {
    dir: 'horizontal',
  },
});

export type statsBase = VariantProps<typeof statsProps>
interface statsProps extends statsBase, Omit<React.ComponentPropsWithRef<'div'>, keyof statsBase>{}

export const Stats = ( { dir, className, ...props }: statsProps ) => {
  return <div {...props} className={statsProps({ dir, className })} />
}

const itemProps = cva('stat')
export const StatsItem = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={itemProps({className})} />
}

const titleProps = cva('stat-title')
export const StatsTitle = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={titleProps({className})} />
}

const valueProps = cva('stat-value')
export const StatsValue = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={valueProps({className})} />
}

const actionProps = cva('stat-actions')
export const StatsAction = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={actionProps({className})} />
}

const descProps = cva('stat-desc')
export const StatsDesc = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={descProps({className})} />
}

const itemFigure = cva('stat-figure')
export const StatsFigure = ( { className, ...props }: React.ComponentPropsWithRef<'figure'> ) => {
  return <figure {...props} className={itemFigure({className})} />
}

