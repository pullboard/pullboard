import getConfig from 'next/config'
import { stringify } from 'querystring'

const { publicRuntimeConfig } = getConfig()

export function getGithubAuthUrl() {
  const queryString = stringify({
    client_id: publicRuntimeConfig.githubClientId,
    redirect_uri: publicRuntimeConfig.redirectUri,
  })

  return `https://github.com/login/oauth/authorize?${queryString}`
}
