import system from 'system-components'
import Text from './Text'

export const Truncate = system(
  {
    is: Text,
  },
  {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
)

Truncate.displayName = 'Truncate'

export default Truncate
