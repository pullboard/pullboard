import React, { Component } from 'react'
import QueryForm from '../components/QueryForm'
import { isLoggedIn, logOut } from '../lib/auth'
import { redirect } from '../lib/utils'

class IndexPage extends Component {
  static getInitialProps({ req, res }) {
    if (!isLoggedIn(req)) {
      redirect('/login', res)
    }

    return {}
  }

  render() {
    return (
      <div>
        <h1>PullBoard</h1>
        <QueryForm />
        <button
          onClick={() => {
            logOut()
            redirect('/login')
          }}
        >
          Log out
        </button>
      </div>
    )
  }
}

export default IndexPage
