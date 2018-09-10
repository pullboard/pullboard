import system from 'system-components'

const Link = system(
  {
    is: 'a',
    color: 'inherit',
  },
  {
    textDecoration: 'none',
    transition: 'opacity 150ms',

    '&:hover': {
      opacity: 0.6,
    },
  },
  'space',
)

Link.displayName = 'Link'

export default Link
