import system from 'system-components'

const Link = system(
  {
    is: 'a',
    color: 'inherit',
  },
  {
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  'space',
)

Link.displayName = 'Link'

export default Link
