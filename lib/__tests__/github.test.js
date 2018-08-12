import { getGithubAuthUrl } from '../github'

describe('getGithubAuthUrl', () => {
  it('returns correct URL', () => {
    expect(getGithubAuthUrl()).toMatchSnapshot()
  })

  it('returns correct URL with `from` argument', () => {
    expect(getGithubAuthUrl('/?query=test')).toMatchSnapshot()
  })
})
