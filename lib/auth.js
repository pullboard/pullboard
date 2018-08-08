import cookies from 'js-cookie'
import { parse } from 'cookie'
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

export function isLoggedIn(req) {
  if (req) {
    if (!req.headers.cookie) {
      return false
    }

    return Boolean(parse(req.headers.cookie)[GITHUB_TOKEN_KEY])
  }

  return Boolean(cookies.get(GITHUB_TOKEN_KEY))
}
