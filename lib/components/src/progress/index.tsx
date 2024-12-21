import { cva, type VariantProps } from "class-variance-authority";

export const progressProps = cva('progress', {
  variants: {
    color: {
      none: 'progress-primary',
      primary: 'progress-primary',
      secondary: 'progress-secondary',
      accent: 'progress-accent',
      info: 'progress-info',
      success: 'progress-success',
      warning: 'progress-warning',
      error: 'progress-error',
    },
  },
  defaultVariants: {
    color: 'none'
  },
});

export type progressBase = VariantProps<typeof progressProps>
type progressGeneric = Omit<React.ComponentPropsWithRef<'progress'>, keyof progressBase | 'max' | 'value'> & Required<Pick<React.ComponentPropsWithRef<'progress'>, 'max' | 'value'>>
export interface progressProps extends progressBase, progressGeneric { }

export const Progress = ( { color: variant, color, className, ...props }: progressProps ) => {
  return <progress {...props} className={progressProps({ color, className })} />
}
