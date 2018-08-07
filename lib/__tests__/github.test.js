import { getGithubAuthUrl } from '../github'

jest.mock('next/config')

describe('getGithubAuthUrl', () => {
  it('returns correct URL', () => {
    expect(getGithubAuthUrl()).toMatchSnapshot()
  })
})
