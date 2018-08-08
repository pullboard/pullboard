import { getGithubAuthUrl } from '../github'

describe('getGithubAuthUrl', () => {
  it('returns correct URL', () => {
    expect(getGithubAuthUrl()).toMatchSnapshot()
  })
})
