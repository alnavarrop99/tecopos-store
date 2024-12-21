import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definir las clases con cva
const cardProps = cva('card bg-base-100 w-96 shadow-xl', {
  variants: {
    effect: {
      none: '',
      glass: 'glass'
    },
    bordered: {
      true: 'card-bordered',
      false: '',
    },
    padding: {
      normal: 'card-normal',
      compact: 'card-compact',
    },
    layout: {
      default: '',
      side: 'card-side',
      full: 'image-full',
    },
  },
  defaultVariants: {
    effect: "none",
    bordered: false,
    padding: 'normal',
    layout: 'default',
  },
});

export type cardBase = VariantProps<typeof cardProps>
interface cardProps extends cardBase, Omit<React.ComponentPropsWithRef<'div'>, keyof cardBase>{}

export const Card = ({ bordered, padding, layout, effect, className, ...props }: cardProps) => {
  return  <div {...props} className={cardProps({ bordered, padding, layout, effect, className })} />
};

const titleProps = cva('card-title');
export const CardTitle = ({ className, ...props }: React.ComponentPropsWithRef<'h2'>) => <h2 {...props} className={titleProps({className})} />

const actionProps = cva('card-actions justify-end');
export const CardAction = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => <div {...props} className={actionProps({className})} />

const bodyProps = cva('card-body');
export const CardBody = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => <div {...props} className={bodyProps({className})} />

type imageProps = Required<Pick<React.ComponentPropsWithRef<'img'>, 'src' | 'alt'>>

export const CardImage = ({ className, src, alt, ...props }: imageProps & Omit<React.ComponentPropsWithRef<'img'>, keyof imageProps> ) => (
  <figure className={className} >
    <img {...props} src={src} alt={alt} />
  </figure>
)
