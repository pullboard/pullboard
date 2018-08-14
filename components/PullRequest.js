import { number, shape, string } from 'prop-types'
import React from 'react'
import { formatTimeDifference } from '../lib/utils'
import Flex from './Flex'
import Link from './Link'
import Text from './Text'
import { Truncate } from './Truncate'

function PullRequest({ pullRequest, ...props }) {
  const timeDifference = formatTimeDifference(new Date(pullRequest.createdAt))
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      px={4}
      borderBottom="1px solid"
      borderColor="gray.2"
      {...props}
    >
      <Truncate fontSize={1} color="gray.7" lineHeight="normal">
        <Link href={pullRequest.repository.owner.url}>
          {pullRequest.repository.owner.login}
        </Link>{' '}
        <Text color="gray.5">/</Text>{' '}
        <Link href={pullRequest.repository.url}>
          {pullRequest.repository.name}
        </Link>
      </Truncate>
      <Truncate color="gray.9" fontWeight="medium" lineHeight="normal">
        <Link href={pullRequest.url}>{pullRequest.title}</Link>
      </Truncate>
      <Truncate fontSize={1} color="gray.7" lineHeight="normal">
        #{pullRequest.number} by{' '}
        <Link href={pullRequest.author.url}>{pullRequest.author.login}</Link>
        <Text mx={1} color="gray.5">
          ·
        </Text>
        {timeDifference}
      </Truncate>
    </Flex>
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
