import system from 'system-components'
import Flex from './Flex'

const HorizontalScroll = system(
  { is: Flex },
  {
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
)

HorizontalScroll.displayName = 'HorizontalScroll'

export default HorizontalScroll
