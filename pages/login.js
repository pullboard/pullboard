import React, { Component } from 'react'
import { getGithubAuthUrl } from '../lib/github'

class LoginPage extends Component {
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
