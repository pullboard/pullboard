import system from 'system-components'
import { themeGet } from 'styled-system'

export const Button = system(
  {
    is: 'button',
    m: 0,
    px: 4,
    py: 3,
    fontSize: 1,
    fontWeight: 'bold',
    lineHeight: 'none',
    color: 'white',
    bg: 'gray.9',
    borderRadius: 1,
    border: 0,
  },
  props => ({
    fontFamily: 'inherit',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
    textDecoration: 'none',
    appearance: 'none',
    cursor: 'pointer',
    outline: 0,
    transition: 'opacity 150ms',

    '&:hover': {
      opacity: 0.6,
    },

    '&:focus': {
      boxShadow: `0 0 0 2px ${themeGet('colors.white')(
        props,
      )}, 0 0 0 5px ${themeGet('colors.gray.5')(props)}`,
    },
  }),
  'alignSelf',
  'height',
)

Button.displayName = 'Button'

export default Button
