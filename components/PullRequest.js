import { number, shape, string } from 'prop-types'
import React from 'react'
import { formatTimeDifference } from '../lib/utils'

function PullRequest({ pullRequest }) {
  const timeDifference = formatTimeDifference(new Date(pullRequest.createdAt))
  return (
    <div>
      <span>
        <a href={pullRequest.repository.owner.url}>
          {pullRequest.repository.owner.login}
        </a>{' '}
        / <a href={pullRequest.repository.url}>{pullRequest.repository.name}</a>
      </span>
      <br />
      <a href={pullRequest.url}>{pullRequest.title}</a>
      <br />
      <span>
        #{pullRequest.number} by{' '}
        <a href={pullRequest.author.url}>{pullRequest.author.login}</a> ·{' '}
        {timeDifference}
      </span>
    </div>
  )
}

PullRequest.propTypes = {
  pullRequest: shape({
    number: number.isRequired,
    title: string.isRequired,
    url: string.isRequired,
    createdAt: string.isRequired,
    author: shape({
      login: string.isRequired,
      url: string.isRequired,
    }).isRequired,
    repository: shape({
      owner: shape({
        login: string.isRequired,
        url: string.isRequired,
      }),
      name: string.isRequired,
      url: string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default PullRequest
