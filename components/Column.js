import { arrayOf, number, shape, string } from 'prop-types'
import React, { Component } from 'react'
import { AutoSizer, InfiniteLoader, List } from 'react-virtualized'
import { GITHUB_TOKEN_KEY } from '../lib/auth'
import { searchPullRequests } from '../lib/github'
import { cookies } from '../lib/utils'
import Badge from './Badge'
import Box from './Box'
import Flex from './Flex'
import Heading from './Heading'
import PullRequest from './PullRequest'
import PullRequestLoader from './PullRequestLoader'

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

  state = {
    list: this.props.column.data.edges,
  }

  isRowLoaded = ({ index }) => {
    return Boolean(this.state.list[index])
  }

  loadMoreRows = async ({ startIndex, stopIndex }) => {
    const githubQuery = this.props.column.githubQuery
    const endCursor = this.state.list[startIndex - 1].cursor
    const batchSize = 1 + stopIndex - startIndex
    const githubToken = cookies()[GITHUB_TOKEN_KEY]

    const { data } = await searchPullRequests({
      githubQuery,
      endCursor,
      batchSize,
      githubToken,
    })

    if (data.errors) {
      throw new Error(JSON.stringify(data.errors))
    }

    this.setState(state => ({
      list: state.list.concat(data.data.search.edges),
    }))
  }

  rowRenderer = ({ index, key, style }) => {
    if (!this.state.list[index]) {
      return <PullRequestLoader key={key} style={style} />
    }

    return (
      <PullRequest
        key={key}
        style={style}
        pullRequest={this.state.list[index].pullRequest}
      />
    )
  }

  render() {
    const { column } = this.props
    return (
      <Flex
        flexDirection="column"
        width={[320, 380]}
        mx={2}
        bg="white"
        borderRadius={1}
        boxShadow={1}
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
        <Flex flexDirection="column" flex="1 1 auto">
          <InfiniteLoader
            isRowLoaded={this.isRowLoaded}
            loadMoreRows={this.loadMoreRows}
            rowCount={column.data.issueCount}
          >
            {({ onRowsRendered, registerChild }) => (
              <AutoSizer>
                {({ height, width }) => (
                  <List
                    style={{ outline: 0 }}
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    width={width}
                    height={height}
                    rowCount={column.data.issueCount}
                    rowHeight={100}
                    rowRenderer={this.rowRenderer}
                  />
                )}
              </AutoSizer>
            )}
          </InfiniteLoader>
        </Flex>
      </Flex>
    )
  }
}

export default Column
