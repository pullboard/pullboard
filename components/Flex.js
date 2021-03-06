import system from 'system-components'
import Box from './Box'

const Flex = system(
  { is: Box },
  { display: 'flex' },
  'flexDirection',
  'alignItems',
  'justifyContent',
  'flexWrap',
)

Flex.displayName = 'Flex'

export default Flex
