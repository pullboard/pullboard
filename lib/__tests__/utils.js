import Router from 'next/router'
import Cookies from 'js-cookie'
import { cookies, redirect, join } from '../utils'

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

describe('cookies', () => {
  it('returns cookies server-side', () => {
    const req = { cookies: { foo: 'bar' } }
    expect(cookies(req)).toEqual(req.cookies)
  })

  it('returns cookies client-side', () => {
    Cookies.set('foo', 'bar')
    expect(cookies()).toEqual({ foo: 'bar' })
  })
})

describe('join', () => {
  it('joins strings with a space', () => {
    expect(join('foo', 'bar')).toBe('foo bar')
  })

  it('ignores falsy arguments', () => {
    expect(join('foo', null, 'bar', undefined)).toBe('foo bar')
  })
})
