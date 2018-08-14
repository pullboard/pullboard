import system from 'system-components'
import Box from './Box'

const Flex = system(
  { is: Box },
  { display: 'flex' },
  'flexDirection',
  'alignItems',
  'justifyContent',
)

Flex.displayName = 'Flex'

export default Flex
