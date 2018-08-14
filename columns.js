import theme from './theme'

const columns = [
  {
    name: 'Needs review',
    githubQuery: 'review:none -status:failure',
    color: theme.colors.violet,
  },
  {
    name: 'Changes requested',
    githubQuery: 'review:changes_requested',
    color: theme.colors.orange,
  },
  {
    name: 'Failing checks',
    githubQuery: 'status:failure',
    color: theme.colors.red,
  },
  {
    name: 'Ready',
    githubQuery: 'review:approved -status:failure',
    color: theme.colors.teal,
  },
]

export default columns
