import Head from 'next/head'
import { withRouter } from 'next/router'
import { arrayOf, shape, string } from 'prop-types'
import { stringify } from 'querystring'
import React, { Component } from 'react'
import styled from 'styled-components'
import columns from '../columns'
import Column from '../components/Column'
import QueryForm from '../components/QueryForm'
import { GITHUB_TOKEN_KEY, loggedIn, logOut } from '../lib/auth'
import { searchPullRequests } from '../lib/github'
import { cookies, join, redirect } from '../lib/utils'

const Title = styled.h1`
  color: ${props => props.theme.main};
`

class IndexPage extends Component {
  static propTypes = {
    router: shape({
      query: shape({
        from: string,
      }).isRequired,
    }).isRequired,
    columns: arrayOf(
      shape({
        githubQuery: string.isRequired,
      }),
    ).isRequired,
  }

  static async getInitialProps({ req, res, asPath, query }) {
    if (!loggedIn(req)) {
      redirect(`/login?${stringify({ from: asPath })}`, res)
    }

    const githubToken = cookies(req)[GITHUB_TOKEN_KEY]

    const columnsWithData = await Promise.all(
      columns.map(async column => {
        const githubQuery = join(query.query, column.githubQuery)
        const { data } = await searchPullRequests({ githubQuery, githubToken })

        if (data.errors) {
          throw new Error(JSON.stringify(data.errors))
        }

        return { ...column, githubQuery, data: data.data.search }
      }),
    )

    return { columns: columnsWithData }
  }

  render() {
    const { router, columns } = this.props

    return (
      <div>
        <Head>
          <title>{router.query.query || 'PullBoard'}</title>
        </Head>
        <Title>PullBoard</Title>
        <QueryForm />
        <button
          onClick={() => {
            logOut()
            redirect('/login')
          }}
        >
          Log out
        </button>
        <div>
          {columns.map(column => (
            <Column key={column.githubQuery} column={column} />
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(IndexPage)
