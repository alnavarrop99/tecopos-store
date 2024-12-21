import { cva, type VariantProps } from "class-variance-authority";

export const skeletonProps = cva('skeleton');

export type skeletonBase = VariantProps<typeof skeletonProps>
interface skeletonProps extends skeletonBase, Omit<React.ComponentPropsWithRef<'div'>, keyof skeletonBase>{}

export const Skeleton = ( { className, ...props }: skeletonProps ) => {
  return <div {...props} className={skeletonProps({ className })} />
}
