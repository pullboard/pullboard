import { arrayOf, number, shape, string } from 'prop-types'
import React, { Component } from 'react'
import Box from './Box'
import Flex from './Flex'
import PullRequest from './PullRequest'
import VerticalScroll from './VerticalScroll'
import Heading from './Heading'
import Badge from './Badge'

class Column extends Component {
  static propTypes = {
    column: shape({
      name: string.isRequired,
      data: shape({
        issueCount: number.isRequired,
        edges: arrayOf(
          shape({
            pullRequest: shape({
              id: string.isRequired,
            }).isRequired,
          }),
        ).isRequired,
      }).isRequired,
    }),
  }

  render() {
    const { column } = this.props
    return (
      <Flex
        flexDirection="column"
        width={380}
        mx={2}
        bg="white"
        borderRadius={1}
        boxShadow={1}
        borderTop="2px solid"
        borderColor={column.color[5]}
      >
        <Box
          p={4}
          flex="0 0 auto"
          borderBottom="1px solid"
          borderColor="gray.2"
        >
          <Heading is="h2" fontSize={2} color={column.color[8]}>
            {column.name}
            <Badge ml={2} color={column.color[8]} bg={column.color[0]}>
              {column.data.issueCount.toLocaleString()}
            </Badge>
          </Heading>
        </Box>
        <VerticalScroll flexDirection="column" flex="1 1 auto">
          <Box>
            {column.data.edges.map(({ pullRequest }) => (
              <PullRequest
                key={pullRequest.id}
                pullRequest={pullRequest}
                style={{ height: 100 }}
              />
            ))}
          </Box>
        </VerticalScroll>
      </Flex>
    )
  }
}

export default Column
