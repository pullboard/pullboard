import { stringify } from 'querystring'
import React, { Component } from 'react'
import QueryForm from '../components/QueryForm'
import { loggedIn, logOut } from '../lib/auth'
import { redirect } from '../lib/utils'

class IndexPage extends Component {
  static getInitialProps({ req, res, asPath }) {
    if (!loggedIn(req)) {
      redirect(`/login?${stringify({ from: asPath })}`, res)
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
