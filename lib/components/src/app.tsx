import { cva, cx, type VariantProps } from "class-variance-authority";
const props = cva([' '], {
  variants: {
    label: {
      true: '',
      false: ''
    }
  }
})

export type Props = VariantProps<typeof props>

export const App = ({label}: Props) => <p className={cx(props({ label }))}>Hello World</p>
