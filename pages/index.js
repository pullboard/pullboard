import Head from 'next/head'
import { withRouter } from 'next/router'
import { shape, string } from 'prop-types'
import { stringify } from 'querystring'
import React, { Component } from 'react'
import Analytics from '../components/Analytics'
import Box from '../components/Box'
import ButtonOutline from '../components/ButtonOutline'
import Column from '../components/Column'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import HorizontalScroll from '../components/HorizontalScroll'
import QueryForm from '../components/QueryForm'
import Text from '../components/Text'
import { GITHUB_TOKEN_KEY, loggedIn, logOut } from '../lib/auth'
import { searchPullRequests } from '../lib/github'
import { cookies, join, redirect } from '../lib/utils'
import columns from '../src/columns'
import BoardCard from '../components/BoardCard'
import Flex from '../components/Flex'
import Header from '../components/Header'
import { GITHUB_TOKEN_KEY, loggedIn } from '../lib/auth'
import { getViewer } from '../lib/github'
import { cookies, redirect } from '../lib/utils'

class IndexPage extends Component {
  static propTypes = {
    viewer: shape({
      login: string.isRequired,
    }).isRequired,
  }

  static async getInitialProps({ req, res, asPath }) {
    if (!loggedIn(req)) {
      redirect(`/login?${stringify({ from: asPath })}`, res)
      return {}
    }

    const githubToken = cookies(req)[GITHUB_TOKEN_KEY]

    const { data } = await getViewer(githubToken)

    if (data.errors) {
      throw new Error(JSON.stringify(data.errors))
    }

    return { viewer: data.data.viewer }
  }

  render() {
    const { viewer } = this.props
    return (
      <Flex flexDirection="column" maxWidth={640} mx="auto">
        <Head>
          <title>PullBoard</title>
        </Head>
        <Header />
        <Analytics key={this.props.query} />
        <Flex mx={2} my={[2, 6]} maxWidth={640} flexDirection="column">
          <BoardCard
            title="Your pull requests"
            avatarUrl={viewer.avatarUrl}
            githubQuery={`author:${viewer.login}`}
          />
          <BoardCard
            title="Your repositories"
            avatarUrl={viewer.avatarUrl}
            githubQuery={`user:${viewer.login}`}
          />
          {viewer.organizations.nodes.map(org => (
            <BoardCard
              key={org.login}
              title={org.name}
              avatarUrl={org.avatarUrl}
              githubQuery={`org:${org.login}`}
            />
          ))}
        </Flex>
      </Flex>
    )
  }
}

export default withRouter(IndexPage)
