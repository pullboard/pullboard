import cookies from 'js-cookie'
import { GITHUB_TOKEN_KEY, logIn, logOut, isLoggedIn } from '../auth'

jest.mock('../../lib/github')

describe('logIn', () => {
  it('sets appropriate cookies', async () => {
    const args = {
      githubCode: 'TEST_GITHUB_CODE',
      res: {
        setHeader: jest.fn(),
      },
    }

    await logIn(args)

    expect(args.res.setHeader.mock.calls).toMatchSnapshot()
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

describe('isLoggedIn', () => {
  it('returns true when logged in server-side', () => {
    const req = {
      headers: {
        cookie: `${GITHUB_TOKEN_KEY}=TEST_GITHUB_TOKEN`,
      },
    }

    expect(isLoggedIn(req)).toBe(true)
  })

  it('returns false when logged out server-side', () => {
    const req = {
      headers: {
        cookie: '',
      },
    }

    expect(isLoggedIn(req)).toBe(false)
  })

  it('returns true when logged in client-side', () => {
    cookies.set(GITHUB_TOKEN_KEY, 'TEST_GITHUB_TOKEN')

    expect(isLoggedIn()).toBe(true)

    cookies.remove(GITHUB_TOKEN_KEY)
  })

  it('returns false when logged out client-side', () => {
    expect(isLoggedIn()).toBe(false)
  })
})
