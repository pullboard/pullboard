require('dotenv').config()

module.exports = {
  serverRuntimeConfig: {
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  publicRuntimeConfig: {
    githubClientId: process.env.GITHUB_CLIENT_ID,
    redirectUri: process.env.REDIRECT_URI,
    gaTrackingId: 'UA-125044578-1',
  },
}
