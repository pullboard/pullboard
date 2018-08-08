import { Component } from 'react'
import { logIn } from '../lib/auth'
import { redirect } from '../lib/utils'

class CallbackPage extends Component {
  static async getInitialProps({ res, query }) {
    // Redirect to /login if getInitialProps is not executing server-side
    if (!res) {
      redirect('/login')
      return {}
    }

    await logIn({ githubCode: query.code, res })

    redirect('/', res)

    return {}
  }

  render() {
    return null
  }
}

export default CallbackPage
