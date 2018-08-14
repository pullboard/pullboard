import system from 'system-components'

const Badge = system(
  {
    fontSize: 0,
    px: 2,
    py: 1,
    color: 'gray.7',
    bg: 'gray.2',
    fontWeight: 'bold',
    borderRadius: 999,
  },
  {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
)

Badge.displayName = 'Badge'

export default Badge
