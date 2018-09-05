import system from 'system-components'

const BlockLink = system(
  {
    is: 'a',
    color: 'inherit',
  },
  {
    display: 'block',
    textDecoration: 'none',

    '&:hover': {
      opacity: 0.7,
    },
  },
  'space',
)

BlockLink.displayName = 'BlockLink'

export default BlockLink
