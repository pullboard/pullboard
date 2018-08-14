import system from 'system-components'
import Text from './Text'

const Heading = system({
  is: Text,
  fontWeight: 'bold',
  lineHeight: 'tight',
  color: 'gray.9',
})

Heading.displayName = 'Heading'

export default Heading
