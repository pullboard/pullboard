import Router from 'next/router'
import { redirect } from '../utils'

describe('redirect', () => {
  it('redirects server-side', () => {
    const res = {
      writeHead: jest.fn(),
      end: jest.fn(),
    }

    redirect('/foo', res)

    expect(res.writeHead.mock.calls).toMatchSnapshot()
  })

  it('redirects client-side', () => {
    redirect('/foo')

    expect(Router.replace).toHaveBeenCalledWith('/foo')
  })
})
