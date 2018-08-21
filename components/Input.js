import system from 'system-components'
import { themeGet } from 'styled-system'

const Input = system(
  {
    is: 'input',
    type: 'text',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    p: 3,
    m: 0,
    width: 1,
    borderRadius: 1,
    color: 'inherit',
    bg: 'gray.2',
  },
  {
    fontFamily: 'inherit',
    display: 'inline-block',
    verticalAlign: 'middle',
    border: 0,
    appearance: 'none',
    outline: 0,
  },
  props => ({
    '&:focus': {
      backgroundColor: 'white',
      boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray.4')(props)}`,
    },
  }),
)

Input.displayName = 'Input'

export default Input
