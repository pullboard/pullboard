import { number, shape, string } from 'prop-types'
import React, { Component } from 'react'

class Column extends Component {
  static propTypes = {
    column: shape({
      name: string.isRequired,
      data: shape({
        issueCount: number.isRequired,
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
      </div>
    )
  }
}

export default Column
