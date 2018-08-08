import { Component } from 'react'
import Router from 'next/router'
import { logIn } from '../lib/auth'

class CallbackPage extends Component {
  static async getInitialProps({ res, query }) {
    // Redirect to /login if getInitialProps is not executing server side
    if (!res) {
      Router.push('/login')
      return {}
    }

    await logIn({ githubCode: query.code, res })

    // Redirect to / after logging in
    res.writeHead(302, { Location: '/' })
    res.end()

    return {}
  }

  render() {
    return null
  }
}

export default CallbackPage
