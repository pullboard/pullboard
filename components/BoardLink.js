import NextLink from 'next/link'
import { string } from 'prop-types'
import React from 'react'
import BlockLink from '../components/BlockLink'
import Text from '../components/Text'

function BoardLink({ githubQuery }) {
  return (
    <NextLink href={`/board?query=${githubQuery}`} prefetch passHref>
      <BlockLink px={5} py={4}>
        <Text
          color="gray.7"
          fontSize={1}
          fontFamily="monospace"
          lineHeight="normal"
        >
          {githubQuery}
        </Text>
      </BlockLink>
    </NextLink>
  )
}

BoardLink.propTypes = {
  githubQuery: string.isRequired,
}

export default BoardLink
