import openColor from 'open-color'

const space = [0, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512]

const colors = openColor

const fonts = {
  sans: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Roboto"',
    '"Oxygen"',
    '"Ubuntu"',
    '"Cantarell"',
    '"Fira Sans"',
    '"Droid Sans"',
    '"Helvetica Neue"',
    'sans-serif',
  ].join(', '),
}

const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 600,
}

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

const lineHeights = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
}

const radii = [0, 6]

const shadows = [
  'none',
  '0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.15)',
]

export default {
  space,
  colors,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  radii,
  shadows,
}
