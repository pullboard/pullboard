import { themeGet } from 'styled-system'
import system from 'system-components'

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
  props => ({
    fontFamily: 'inherit',
    display: 'inline-block',
    verticalAlign: 'middle',
    border: 0,
    appearance: 'none',
    outline: 0,
    transition: 'all 150ms',

    '&:hover': {
      backgroundColor: themeGet('colors.gray.3')(props),
    },

    '&:focus': {
      backgroundColor: themeGet('colors.white')(props),
      boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray.4')(props)}`,
    },
  }),
)

Input.displayName = 'Input'

export default Input
