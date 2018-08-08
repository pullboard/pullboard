import Router from 'next/router'
import React, { Component } from 'react'
import QueryForm from '../components/QueryForm'
import { logOut } from '../lib/auth'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>PullBoard</h1>
        <QueryForm />
        <button
          onClick={() => {
            logOut()
            Router.push('/login')
          }}
        >
          Log out
        </button>
      </div>
    )
  }
}

export default IndexPage
