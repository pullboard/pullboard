import system from 'system-components'
import Button from './Button'

export const ButtonOutline = system({
  is: Button,
  color: 'gray.8',
  bg: 'transparent',
  border: '1px solid',
  borderColor: 'gray.4',
})

ButtonOutline.displayName = 'ButtonOutline'

export default ButtonOutline
