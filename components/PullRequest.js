import { number, shape, string } from 'prop-types'
import React from 'react'
import { formatTimeDifference } from '../lib/utils'
import Flex from './Flex'
import OutboundLink from './OutboundLink'
import StatusIcon from './StatusIcon'
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
        <OutboundLink href={pullRequest.repository.owner.url}>
          {pullRequest.repository.owner.login}
        </OutboundLink>{' '}
        <Text color="gray.5">/</Text>{' '}
        <OutboundLink href={pullRequest.repository.url}>
          {pullRequest.repository.name}
        </OutboundLink>
      </Truncate>
      <Truncate color="gray.9" fontWeight="medium" lineHeight="normal">
        <OutboundLink href={pullRequest.url}>{pullRequest.title}</OutboundLink>
      </Truncate>
      <Truncate fontSize={1} color="gray.7" lineHeight="normal">
        <StatusIcon pullRequest={pullRequest} mr={1} />#{pullRequest.number} by{' '}
        <OutboundLink href={pullRequest.author.url}>
          {pullRequest.author.login}
        </OutboundLink>
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
