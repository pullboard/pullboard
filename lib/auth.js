import { parse } from 'cookie'
import cookies from 'js-cookie'
import { getGithubToken } from '../lib/github'

export const GITHUB_TOKEN_KEY = 'github_token'

// logIn should always be executed server-side
export async function logIn(githubCode, res) {
  const githubToken = await getGithubToken(githubCode)

  res.setHeader(
    'Set-Cookie',
    `${GITHUB_TOKEN_KEY}=${githubToken}; SameSite=Strict`,
  )
}

// logOut should always be executed client-side
export function logOut() {
  cookies.remove(GITHUB_TOKEN_KEY)
}

export function isLoggedIn(req) {
  if (req) {
    // Server-side
    return (
      Boolean(req.headers.cookie) &&
      Boolean(parse(req.headers.cookie)[GITHUB_TOKEN_KEY])
    )
  }

  // Client-side
  return Boolean(cookies.get(GITHUB_TOKEN_KEY))
}
