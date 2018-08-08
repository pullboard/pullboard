import cookies from 'js-cookie'
import { getGithubToken } from '../lib/github'

export const GITHUB_TOKEN_KEY = 'github_token'

export async function logIn({ githubCode, res }) {
  const githubToken = await getGithubToken(githubCode)

  res.setHeader(
    'Set-Cookie',
    `${GITHUB_TOKEN_KEY}=${githubToken}; SameSite=Strict`,
  )
}

export function logOut() {
  cookies.remove(GITHUB_TOKEN_KEY)
}
