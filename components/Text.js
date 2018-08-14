import system from 'system-components'

const Text = system(
  { is: 'span', m: 0 },
  'space',
  'color',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
)

Text.displayName = 'Text'

export default Text
