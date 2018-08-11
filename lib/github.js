import getConfig from 'next/config'
import { stringify } from 'querystring'
import axios from 'axios'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export function getGithubAuthUrl() {
  const queryString = stringify({
    client_id: publicRuntimeConfig.githubClientId,
    redirect_uri: publicRuntimeConfig.redirectUri,
  })

  return `https://github.com/login/oauth/authorize?${queryString}`
}

export async function getGithubToken(githubCode) {
  const endpoint = 'https://github.com/login/oauth/access_token'

  const { data } = await axios({
    url: endpoint,
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    data: {
      client_id: publicRuntimeConfig.githubClientId,
      client_secret: serverRuntimeConfig.githubClientSecret,
      code: githubCode,
    },
  })

  if (data.error) {
    throw new Error(data.error)
  }

  return data.access_token
}
