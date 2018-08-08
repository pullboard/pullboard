import React, { Component } from 'react'
import QueryForm from '../components/QueryForm'
import { isLoggedIn, logOut } from '../lib/auth'
import { redirect } from '../lib/utils'
import { stringify } from 'querystring'

class IndexPage extends Component {
  static getInitialProps({ req, res, asPath }) {
    if (!isLoggedIn(req)) {
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
