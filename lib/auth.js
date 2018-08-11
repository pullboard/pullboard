import cookies from 'js-cookie'
import { getGithubToken } from '../lib/github'

export const GITHUB_TOKEN_KEY = 'github_token'

// logIn should always be executed server-side
export async function logIn(githubCode, res) {
  const githubToken = await getGithubToken(githubCode)
  res.cookie(GITHUB_TOKEN_KEY, githubToken)
}

// logOut should always be executed client-side
export function logOut() {
  cookies.remove(GITHUB_TOKEN_KEY)
}

export function loggedIn(req) {
  if (req) {
    // Server-side
    return Boolean(req.cookies[GITHUB_TOKEN_KEY])
  }

  // Client-side
  return Boolean(cookies.get(GITHUB_TOKEN_KEY))
}
