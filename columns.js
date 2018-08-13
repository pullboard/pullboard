const columns = [
  {
    name: 'Needs review',
    githubQuery: 'review:none',
  },
  {
    name: 'Changes requested',
    githubQuery: 'review:changes_requested',
  },
  {
    name: 'Failing checks',
    githubQuery: 'status:failure',
  },
  {
    name: 'Ready',
    githubQuery: 'review:approved status:success status:pending',
  },
]

export default columns
