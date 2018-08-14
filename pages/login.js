import { withRouter } from 'next/router'
import { func, shape, string } from 'prop-types'
import React, { Component } from 'react'
import { loggedIn } from '../lib/auth'
import { getGithubAuthUrl } from '../lib/github'
import { redirect } from '../lib/utils'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Flex from '../components/Flex'

class LoginPage extends Component {
  static propTypes = {
    router: shape({
      push: func.isRequired,
      query: shape({
        from: string,
      }).isRequired,
    }).isRequired,
  }

  static getInitialProps({ req, res, query }) {
    if (loggedIn(req)) {
      redirect(query.from || '/', res)
    }

    return {}
  }

  render() {
    const { router } = this.props

    return (
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Heading is="h1" fontSize={5} mb={5}>
          Welcome to PullBoard
        </Heading>
        <Button
          fontSize={2}
          px={5}
          py={3}
          onClick={() => router.push(getGithubAuthUrl(router.query.from))}
        >
          Continue with GitHub
        </Button>
      </Flex>
    )
  }
}

export default withRouter(LoginPage)
