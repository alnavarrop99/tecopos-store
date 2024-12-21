import { cva, type VariantProps } from "class-variance-authority";

export const navbarProps = cva('navbar shadow-md rounded-box bg-base-100');
export type navbarBase = VariantProps<typeof navbarProps>
interface navbarProps extends navbarBase, Omit<React.ComponentPropsWithRef<'div'>, keyof navbarBase>{}

export const Navbar = ( { className, ...props }: navbarProps ) => {
  return <div {...props} className={navbarProps({className})} />
}

export const sectionProps = cva('', {
  variants: {
    align: {
      start: 'navbar-start',
      center: 'navbar-center',
      end: 'navbar-end',
    },
    stetch: {
      true: 'flex-1',
      false: 'flex-none'
    },
  },
  defaultVariants: {
    stetch: false
  }
})
export type sectionBase = VariantProps<typeof sectionProps>
interface sectionProps extends sectionBase, Omit<React.ComponentPropsWithRef<'div'>, keyof sectionBase>{}
export const NavbarSection = ({ className, stetch, align, ...props }: sectionProps) => {
  return <div {...props} className={sectionProps({ align, stetch, className})} />
}
