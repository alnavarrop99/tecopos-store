import { cva, type VariantProps } from "class-variance-authority";

export const labelProps = cva('label', {
  variants: {
    control: {
      true: 'form-control',
      false: '',
    }
  },
  defaultVariants: {
    control: false
  },
});

export type labelBase = VariantProps<typeof labelProps>
interface labelProps extends labelBase, Omit<React.ComponentPropsWithRef<'label'>, keyof labelBase>{}

export const Label = ( { className, ...props }: labelProps ) => {
  return <label {...props} className={labelProps({ className })} />
}
