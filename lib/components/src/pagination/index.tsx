import { cva, cx, type VariantProps } from "class-variance-authority";
import { Button, buttonProps, type buttonBase } from "../button";
import { createContext, useId } from "react";

export const paginationProps = cva('join shadow-md rounded-md');
export type paginationBase = VariantProps<typeof paginationProps>
interface buttonProps extends paginationBase, Omit<React.ComponentPropsWithRef<'div'>, keyof paginationBase>{}

export const groupIdCtx = createContext<string | undefined>(undefined)
export const Pagination = ( { className, ...props }: buttonProps ) => {
  return (<groupIdCtx.Provider value={useId()}>
    <div {...props} className={paginationProps({className})} />
  </groupIdCtx.Provider>)
}

const itemProps = cva('join-item')
export const PaginationItem: typeof Button = ({className, size = 'square', ...props}) => {
  return <Button {...props} size={size} className={itemProps({className})} />
}

export interface itemBase extends buttonBase, Omit<React.ComponentPropsWithRef<'input'>, keyof buttonBase> {
  children?: string
}
export const PaginationItemRadio = ({ size = 'square', disabled, active, color, effect, variant, className, children, ...props}: itemBase) => {
  return (<groupIdCtx.Consumer>
    {(id) => <input {...props} aria-label={children} name={id} type="radio" className={cx(itemProps(), buttonProps({ size, disabled, active, color, effect, variant }), className)} />}
  </groupIdCtx.Consumer>)
}

export const PaginationPrev: typeof PaginationItem = ({className, ...props}) => {
  return <PaginationItem {...props}>«</PaginationItem>
}

export const PaginationNext: typeof PaginationItem = ({className, ...props}) => {
  return <PaginationItem {...props}>»</PaginationItem>
}
