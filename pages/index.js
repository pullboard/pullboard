import { withRouter } from 'next/router'
import { stringify } from 'query-string'
import React, { Component } from 'react'

class IndexPage extends Component {
  state = {
    query: this.props.router.query.query || ''
  }

  handleQueryChange = event => {
    this.setState({ query: event.target.value })
  }

  handleQuerySubmit = event => {
    event.preventDefault()

    const { router } = this.props
    const { query } = this.state

    if (query !== router.query.query) {
      router.push(`/?${stringify({ ...router.query, query })}`)
    }
  }

  render() {
    const { router } = this.props
    const { query } = this.state

    return (
      <div>
        <form onSubmit={this.handleQuerySubmit}>
          <input value={query} onChange={this.handleQueryChange} />
          {query !== router.query.query ? <button>Apply</button> : null}
        </form>
      </div>
    )
  }
}

export default withRouter(IndexPage)
