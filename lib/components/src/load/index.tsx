import { cva, cx, type VariantProps } from "class-variance-authority";
import { Progress } from "../progress";

export const loadingProps = cva('loading', {
  variants: {
    color: {
      none: '',
      neutral: 'text-neutral',
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      info: 'text-info',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error',
      ghost: 'text-ghost',
    },
    size: {
      lg: 'loading-lg',
      md: 'loading-md',
      sm: 'loading-sm',
      xs: 'loading-xs',
      wide: 'loading-wide',
      block: 'loading-block',
      circle: 'loading-circle',
      square: 'loading-square',
    },
  },
  defaultVariants: {
    color: 'none',
    size: 'md',
  },
});

export type loadingBase = VariantProps<typeof loadingProps>
interface loadingProps extends loadingBase, Omit<React.ComponentPropsWithRef<'span'>, keyof loadingBase>{}

const Loading = ( { color, size, className, ...props }: loadingProps ) => {
  return <span {...props} className={loadingProps({ color, size, className })} />
}

export const Spinner: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cx('loading-spinner', className)} />
}

export const Dots: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cx('loading-dots', className)} />
}

export const Ring: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cx('loading-rings', className)} />
}

export const Ball: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cx('loading-ball', className)} />
}

export const Bars: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cx('loading-bars', className)} />
}

export const Infy: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cx('loading-infinity', className)} />
}

export const Progressive = ( { className, ...props }: Partial<Omit<React.ComponentPropsWithRef<typeof Progress>, 'max'|'value'>> ) => {
  // @ts-ignore
  return <Progress {...props} className={cx('rounded-none', className)} />
}
