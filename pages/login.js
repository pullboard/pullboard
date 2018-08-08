import React, { Component } from 'react'
import { isLoggedIn } from '../lib/auth'
import { getGithubAuthUrl } from '../lib/github'
import { redirect } from '../lib/utils'

class LoginPage extends Component {
  static getInitialProps({ req, res }) {
    if (isLoggedIn(req)) {
      redirect('/', res)
    }

    return {}
  }

  render() {
    return (
      <div>
        <h1>Welcome to PullBoard</h1>
        <button onClick={() => (window.location = getGithubAuthUrl())}>
          Continue with GitHub
        </button>
      </div>
    )
  }
}

export default LoginPage
