import NextLink from 'next/link'
import { string } from 'prop-types'
import React from 'react'
import CardLink from './CardLink'
import Avatar from './Avatar'
import Text from './Text'
import Flex from './Flex'

function BoardCard({ title, avatarUrl, githubQuery }) {
  return (
    <NextLink href={`/board?query=${githubQuery}`} prefetch passHref>
      <CardLink m={2} p={4}>
        <Flex alignItems="center">
          <Avatar src={avatarUrl} mr={4} />
          <Flex flexDirection="column">
            <Text
              color="gray.9"
              fontSize={2}
              fontWeight="medium"
              lineHeight="normal"
            >
              {title}
            </Text>
            <Text color="gray.7" fontSize={1} lineHeight="normal">
              {githubQuery}
            </Text>
          </Flex>
        </Flex>
      </CardLink>
    </NextLink>
  )
}

BoardCard.propTypes = {
  title: string.isRequired,
  githubQuery: string.isRequired,
  avatarUrl: string.isRequired,
}

export default BoardCard
