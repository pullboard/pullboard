import { withRouter } from 'next/router'
import { shape, func } from 'prop-types'
import React, { Component } from 'react'
import { loggedIn } from '../lib/auth'
import { getGithubAuthUrl } from '../lib/github'
import { redirect } from '../lib/utils'

class LoginPage extends Component {
  static propTypes = {
    router: shape({
      push: func.isRequired,
    }).isRequired,
  }

  static getInitialProps({ req, res }) {
    if (loggedIn(req)) {
      redirect('/', res)
    }

    return {}
  }

  render() {
    return (
      <div>
        <h1>Welcome to PullBoard</h1>
        <button onClick={() => this.props.router.push(getGithubAuthUrl())}>
          Continue with GitHub
        </button>
      </div>
    )
  }
}

export default withRouter(LoginPage)
