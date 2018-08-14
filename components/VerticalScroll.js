import system from 'system-components'
import Flex from './Flex'

const VerticalScroll = system({ is: Flex }, { overflowY: 'auto' })

VerticalScroll.displayName = 'VerticalScroll'

export default VerticalScroll
