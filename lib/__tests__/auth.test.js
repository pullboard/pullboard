import cookies from 'js-cookie'
import { GITHUB_TOKEN_KEY, logIn, logOut } from '../auth'

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
