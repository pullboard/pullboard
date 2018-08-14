import system from 'system-components'

const Text = system(
  { is: 'span' },
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
