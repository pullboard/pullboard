import { arrayOf, number, shape, string } from 'prop-types'
import React, { Component } from 'react'
import PullRequest from './PullRequest'

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
      <div>
        <h2>
          {column.name} ({column.data.issueCount})
        </h2>
        <div>
          {column.data.edges.map(({ pullRequest }) => (
            <PullRequest key={pullRequest.id} pullRequest={pullRequest} />
          ))}
        </div>
      </div>
    )
  }
}

export default Column
