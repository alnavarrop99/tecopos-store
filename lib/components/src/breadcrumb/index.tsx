import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "../link";

export const breadcrumbsProps = cva('breadcrumbs', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type breadcrumbsBase = VariantProps<typeof breadcrumbsProps>
interface buttonProps extends breadcrumbsBase, Omit<React.ComponentPropsWithRef<'div'>, keyof breadcrumbsBase>{}

export const Breadcrumb = ( { size, className, children, ...props }: buttonProps ) => {
  return (<div {...props} className={breadcrumbsProps({size, className})}>
    <ul>{children}</ul>
  </div>)
}

export const BreadcrumbItem = (props: React.ComponentPropsWithRef<'li'>) => {
  return <li {...props} />
}

export const BreadcrumbLink = (props: React.ComponentPropsWithRef<typeof Link>) => {
  return <BreadcrumbItem><Link {...props} /></BreadcrumbItem>
}
