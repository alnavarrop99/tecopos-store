import { cva, cx, type VariantProps } from "class-variance-authority";
import { groupIdCtx } from "../pagination";
import { createContext, useId } from "react";
import { buttonBase, buttonProps } from "../button";

export const drawerProps = cva('drawer', {
  variants: {
    open: {
      true: 'drawer-open',
      false: ''
    },
    justify: {
      start: '',
      end: 'drawer-end'
    }
  },
  defaultVariants: {
    open: false,
    justify: 'start'
  }
});
export type drawerBase = VariantProps<typeof drawerProps> & {
  noOverlay?: boolean
}
interface drawerProps extends drawerBase, Omit<React.ComponentPropsWithRef<'div'>, keyof drawerBase>{}

const initProp = { noOverlay: true } as const satisfies drawerBase
const overlayCtx = createContext<boolean | undefined>(initProp.noOverlay)
export const Drawer = ( { className, justify, noOverlay, open, children, ...props }: drawerProps = initProp ) => {
  const id = useId()
  return (<groupIdCtx.Provider value={id}>
    <overlayCtx.Provider value={noOverlay}>
      <div {...props} className={drawerProps({justify, open, className})} >
        <input id={id} type="checkbox" className="drawer-toggle" />
        {children}
      </div>
    </overlayCtx.Provider>
  </groupIdCtx.Provider>)
}

export const contentProps = cva('drawer-content');
export const DrawerContent = ({ className ,...props }: React.ComponentPropsWithRef<'div'>) => {
  return <div {...props} className={contentProps({ className })} />
}

export const drawerbtnProps = cva('drawer-button');
export type drawerbtnBase = VariantProps<typeof drawerbtnProps> & buttonBase 
interface drawerbtnProps extends drawerbtnBase, Omit<React.ComponentPropsWithRef<'label'>, keyof drawerbtnBase | 'htmlFor'>{}

export const DrawerBtn = ({ variant, layout, color, active, disabled, effect, size, className, ...props }: drawerbtnProps) => {
  return (<groupIdCtx.Consumer>
    {(id) => <label {...props} htmlFor={id} className={cx(buttonProps({ variant, layout, color, active, disabled, effect, size, }), drawerbtnProps({ className }))} /> }
  </groupIdCtx.Consumer>)
}

export const navProps = cva('drawer-side');
export const DrawerNav = ({ className, children, ...props }: React.ComponentPropsWithRef<'div'>) => {
  return (<overlayCtx.Consumer>
    {(noOverlay) => <div {...props} className={navProps({ className })}>
      { !noOverlay && <DrawerOverlay /> }
      {children}
    </div>
    }
  </overlayCtx.Consumer>)
}

const DrawerOverlay = () => <groupIdCtx.Consumer>
  {(id) => <label htmlFor={id} aria-label="close sidebar" className='drawer-overlay' />}
</groupIdCtx.Consumer>
