import cookies from 'js-cookie'
import { GITHUB_TOKEN_KEY, logIn, logOut, loggedIn } from '../auth'

jest.mock('../../lib/github')

describe('logIn', () => {
  it('sets appropriate cookies', async () => {
    const githubCode = 'TEST_GITHUB_CODE'
    const res = { cookie: jest.fn() }

    await logIn(githubCode, res)

    expect(res.cookie.mock.calls).toMatchSnapshot()
  })
})

describe('logOut', () => {
  it('removes appropriate cookies', () => {
    cookies.set(GITHUB_TOKEN_KEY, 'TEST_GITHUB_TOKEN')

    expect(cookies.get(GITHUB_TOKEN_KEY)).toBe('TEST_GITHUB_TOKEN')

    logOut()

    expect(cookies.get(GITHUB_TOKEN_KEY)).toBeNull()
  })
})

describe('loggedIn', () => {
  it('returns true when logged in server-side', () => {
    const req = {
      cookies: {
        [GITHUB_TOKEN_KEY]: 'TEST_GITHUB_TOKEN',
      },
    }

    expect(loggedIn(req)).toBe(true)
  })

  it('returns false when logged out server-side', () => {
    const req = {
      cookies: {},
    }

    expect(loggedIn(req)).toBe(false)
  })

  it('returns true when logged in client-side', () => {
    cookies.set(GITHUB_TOKEN_KEY, 'TEST_GITHUB_TOKEN')

    expect(loggedIn()).toBe(true)

    cookies.remove(GITHUB_TOKEN_KEY)
  })

  it('returns false when logged out client-side', () => {
    expect(loggedIn()).toBe(false)
  })
})
