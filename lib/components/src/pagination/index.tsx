import { cva, cx, type VariantProps } from "class-variance-authority";
import { Button, buttonProps, type buttonBase } from "../button";
import { createContext, useId } from "react";

export const paginationProps = cva('join shadow-md rounded-md');
export type paginationBase = VariantProps<typeof paginationProps>
interface paginationProps extends paginationBase, Omit<React.ComponentPropsWithRef<'div'>, keyof paginationBase>{}

export const groupIdCtx = createContext<string | undefined>(undefined)
export const Pagination = ( { className, ...props }: paginationProps ) => {
  return (<groupIdCtx.Provider value={useId()}>
    <div {...props} className={paginationProps({className})} />
  </groupIdCtx.Provider>)
}

const itemProps = cva('join-item')
export const PaginationItem: typeof Button = ({className, layout = 'square', ...props}) => {
  return <Button {...props} layout={layout} className={itemProps({className})} />
}

export interface itemBase extends buttonBase, Omit<React.ComponentPropsWithRef<'input'>, keyof buttonBase> {
  children?: string
}
export const PaginationItemRadio = ({ layout = 'square', size, disabled, active, color, effect, variant, className, children, ...props}: itemBase) => {
  return (<groupIdCtx.Consumer>
    {(id) => <input {...props} aria-label={children} name={id} type="radio" className={cx(itemProps(), buttonProps({ size, layout, disabled, active, color, effect, variant }), className)} />}
  </groupIdCtx.Consumer>)
}

export const PaginationPrev: typeof PaginationItem = ({className, ...props}) => {
  return <PaginationItem {...props}>«</PaginationItem>
}

export const PaginationNext: typeof PaginationItem = ({className, ...props}) => {
  return <PaginationItem {...props}>»</PaginationItem>
}
