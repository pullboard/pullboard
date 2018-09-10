import system from 'system-components'

export const Avatar = system(
  {
    is: 'img',
    size: 36,
    borderRadius: 1,
  },
  {
    display: 'inline-block',
  },
  'space',
)

Avatar.displayName = 'Avatar'

export default Avatar
