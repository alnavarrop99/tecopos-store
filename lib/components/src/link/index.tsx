import { cva, type VariantProps } from "class-variance-authority";

export const linkProps = cva('link', {
  variants: {
    color: {
      none: '',
      neutral: 'link-neutral',
      primary: 'link-primary',
      secondary: 'link-secondary',
      accent: 'link-accent',
      success: 'link-success',
      info: 'link-info',
      warning: 'link-warning',
      error: 'link-error',
    },
    noHover: {
      false: 'link-hover',
      true: 'no-underline',
    },
  },
  defaultVariants: {
    color: "none",
    noHover: true,
  },
});

export type linkBase = VariantProps<typeof linkProps>
interface linkProps extends linkBase, Omit<React.ComponentPropsWithRef<'a'>, keyof linkBase>{}

export const Link = ( { color, noHover = false, className, ...props }: linkProps ) => {
  return <a {...props} className={linkProps({ color, noHover, className })} />
}

type createLinkBase = Omit<linkBase, 'Element'>
export const createLink = <T extends React.ElementType<any, keyof React.JSX.IntrinsicElements>> ( Element: T ) =>
  ({ className, noHover, color, ...props }: createLinkBase & Omit<React.ComponentPropsWithRef<typeof Element>, keyof createLinkBase>) => {
  // @ts-ignore
  return <Element {...props} className={linkProps({ color, noHover, className })}  />
}
