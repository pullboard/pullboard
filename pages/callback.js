import { Component } from 'react'
import { logIn } from '../lib/auth'
import { redirect } from '../lib/utils'

class CallbackPage extends Component {
  static async getInitialProps({ res, query }) {
    // If getInitialProps is executing client-side or `query.code` is falsy,
    // redirect to /login
    if (!res || !query.code) {
      redirect('/login', res)
      return {}
    }

    await logIn(query.code, res)
    redirect(query.from || '/', res)
    return {}
  }

  render() {
    return null
  }
}

export default CallbackPage
