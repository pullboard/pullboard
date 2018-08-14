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
    boxShadow: 1,
    borderRadius: 1,
    color: 'inherit',
    bg: 'white',
  },
  {
    fontFamily: 'inherit',
    display: 'inline-block',
    verticalAlign: 'middle',
    border: 0,
    appearance: 'none',
    outline: 0,
  },
)

Input.displayName = 'Input'

export default Input
