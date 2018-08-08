import { Component } from 'react'
import Router from 'next/router'
import { getGithubToken } from '../lib/github'

class CallbackPage extends Component {
  static async getInitialProps({ res, query }) {
    // Redirect to /login if getInitialProps is not executing server side
    if (!res) {
      Router.push('/login')
      return {}
    }

    const githubCode = query.code
    const githubToken = await getGithubToken(githubCode)

    res.setHeader('Set-Cookie', `githubToken=${githubToken}; SameSite=Strict`)

    res.writeHead(302, { Location: '/' })
    res.end()

    return {}
  }

  render() {
    return null
  }
}

export default CallbackPage
