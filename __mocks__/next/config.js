const getConfig = jest.fn(() => ({
  publicRuntimeConfig: {
    githubClientId: 'TEST_GITHUB_CLIENT_ID',
    redirectUri: 'TEST_REDIRECT_URI',
  },
}))

export default getConfig
