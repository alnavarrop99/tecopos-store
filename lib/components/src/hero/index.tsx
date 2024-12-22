import { cva, type VariantProps } from "class-variance-authority";

export const heroProps = cva('hero', {
  variants: {
    overlay: {
      true: 'hero-overlay',
      false: ''
    }
  }
})
export type heroBase = VariantProps<typeof heroProps>
interface heroProps extends heroBase, Omit<React.ComponentPropsWithRef<'div'>, keyof heroBase>{}

export const Hero = ( { className, ...props }: heroProps ) => {
  return <div {...props} className={heroProps({className})} />
}
  
const sectionProps = cva('hero-content')
export const HeroSection = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => {
  return <div {...props} className={sectionProps({className})} />
}
