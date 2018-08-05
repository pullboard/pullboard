import { withRouter } from 'next/router'
import { stringify } from 'query-string'
import React, { Component } from 'react'

class QueryForm extends Component {
  state = {
    query: this.props.router.query.query || ''
  }

  handleChange = event => {
    this.setState({ query: event.target.value })
  }

  handleSubmit = event => {
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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          aria-label="Query"
          spellCheck={false}
          value={query}
          onChange={this.handleChange}
        />
        {query !== router.query.query ? <button>Apply</button> : null}
      </form>
    )
  }
}

export default withRouter(QueryForm)
