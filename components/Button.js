import system from 'system-components'
export const Button = system(
  {
    is: 'button',
    fontSize: 1,
    fontWeight: 'bold',
    lineHeight: 'normal',
    m: 0,
    px: 4,
    py: 2,
    color: 'white',
    bg: 'gray.8',
    borderRadius: 1,
    border: 0,
  },
  {
    fontFamily: 'inherit',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
    textDecoration: 'none',
    appearance: 'none',
    cursor: 'pointer',
  },
  'alignSelf',
  'height',
)

Button.displayName = 'Button'

export default Button
