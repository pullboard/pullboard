import { themeGet } from 'styled-system'
import system from 'system-components'

const CardLink = system(
  {
    is: 'a',
    flexDirection: 'column',
    color: 'inherit',
    bg: 'white',
    boxShadow: 1,
    borderRadius: 1,
  },
  props => ({
    display: 'block',
    textDecoration: 'none',
    transition: 'box-shadow 150ms',

    '&:hover': {
      boxShadow: themeGet('shadows.2')(props),
    },
  }),
  'space',
)

CardLink.displayName = 'CardLink'

export default CardLink
