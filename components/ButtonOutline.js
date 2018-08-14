import system from 'system-components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonOutline = system(
  {
    is: Button,
    color: 'gray.8',
    bg: 'transparent',
  },
  props => ({
    boxShadow: `inset 0 0 0 1px ${themeGet('colors.gray.4')(props)}`,
  }),
)

ButtonOutline.displayName = 'ButtonOutline'

export default ButtonOutline
