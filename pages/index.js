import Head from 'next/head'
import { withRouter } from 'next/router'
import { shape, string } from 'prop-types'
import { stringify } from 'querystring'
import React, { Component } from 'react'
import BoardLink from '../components/BoardLink'
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

    const { data: viewerData } = await getViewer(githubToken)

    if (viewerData.errors) {
      throw new Error(JSON.stringify(viewerData.errors))
    }

    return { viewer: viewerData.data.viewer }
  }

  render() {
    const { viewer } = this.props
    return (
      <Flex flexDirection="column" maxWidth={800} mx="auto">
        <Head>
          <title>PullBoard</title>
        </Head>
        <Header />
        <Flex
          mx={4}
          my={[4, 6]}
          flexDirection="column"
          bg="white"
          boxShadow={1}
          borderRadius={1}
        >
          <BoardLink githubQuery={`author:${viewer.login}`} />
          <BoardLink githubQuery={`user:${viewer.login}`} />
        </Flex>
      </Flex>
    )
  }
}

export default withRouter(IndexPage)
