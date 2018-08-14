import system from 'system-components'

const Icon = system(
  {
    is: 'svg',
    viewBox: '0 0 16 16',
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
    size: 16,
  },
  { verticalAlign: 'middle' },
  'color',
  'space',
)

Icon.displayName = 'Icon'

export default Icon
