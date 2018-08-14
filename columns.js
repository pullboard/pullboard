import theme from './theme'

const columns = [
  {
    name: 'Needs review',
    githubQuery: 'review:none',
    color: theme.colors.violet[5],
  },
  {
    name: 'Changes requested',
    githubQuery: 'review:changes_requested',
    color: theme.colors.yellow[5],
  },
  {
    name: 'Failing checks',
    githubQuery: 'status:failure',
    color: theme.colors.red[5],
  },
  {
    name: 'Ready',
    githubQuery: 'review:approved status:success status:pending',
    color: theme.colors.teal[5],
  },
]

export default columns
