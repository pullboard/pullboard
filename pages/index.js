import Head from 'next/head'
import { withRouter } from 'next/router'
import { shape, string } from 'prop-types'
import { stringify } from 'querystring'
import React, { Component } from 'react'
import Analytics from '../components/Analytics'
import Flex from '../components/Flex'
import BoardCard from '../components/BoardCard'
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
        <Analytics />
        <Head>
          <title>PullBoard</title>
        </Head>
        <Header />
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
