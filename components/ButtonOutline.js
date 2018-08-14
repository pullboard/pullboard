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
    boxShadow: `inset 0 0 0 2px ${themeGet('colors.gray.3')(props)}`,
  }),
)

ButtonOutline.displayName = 'ButtonOutline'

export default ButtonOutline
