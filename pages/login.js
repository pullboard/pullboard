import Head from 'next/head'
import { withRouter } from 'next/router'
import { func, shape, string } from 'prop-types'
import React, { Component } from 'react'
import Analytics from '../components/Analytics'
import Box from '../components/Box'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Text from '../components/Text'
import { loggedIn } from '../lib/auth'
import { getGithubAuthUrl } from '../lib/github'
import { redirect } from '../lib/utils'

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
      <Box bg="white">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          maxWidth={600}
          px={5}
          mx="auto"
        >
          <Analytics />
          <Head>
            <title>PullBoard</title>
          </Head>
          <Heading is="h1" fontSize={5} mb={6} textAlign="center">
            <Text
              fontSize={1}
              color="violet.8"
              style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              Welcome to
            </Text>
            <br />
            PullBoard <Text fontWeight="light">Alpha</Text>
          </Heading>
          <Text
            color="gray.7"
            fontSize={3}
            textAlign="center"
            lineHeight="normal"
            mb={7}
          >
            A flexible dashboard that helps teams, maintainers, and contributors
            stay on top of open pull requests.
          </Text>
          <Button
            fontSize={2}
            px={5}
            py={4}
            mb={7}
            onClick={() => router.push(getGithubAuthUrl(router.query.from))}
          >
            Log in with GitHub
          </Button>
        </Flex>
      </Box>
    )
  }
}

export default withRouter(LoginPage)
