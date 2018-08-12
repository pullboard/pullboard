import Router from 'next/router'
import React from 'react'
import { cleanup, render } from 'react-testing-library'
import CallbackPage from '../callback'

jest.mock('../../lib/github')

it('renders without crashing', () => {
  render(<CallbackPage />)
  cleanup()
})

describe('getInitialProps', () => {
  it('sets cookies and redirects to /', async () => {
    const context = {
      res: {
        cookie: jest.fn(),
        writeHead: jest.fn(),
        end: jest.fn(),
      },
      query: {
        code: 'TEST_CODE',
      },
    }

    await CallbackPage.getInitialProps(context)

    expect(context.res.cookie.mock.calls).toMatchSnapshot()
    expect(context.res.writeHead.mock.calls).toMatchSnapshot()
  })

  it('redirects to `query.from` if defined', async () => {
    const context = {
      res: {
        cookie: jest.fn(),
        writeHead: jest.fn(),
        end: jest.fn(),
      },
      query: {
        code: 'TEST_CODE',
        from: '/?query=test',
      },
    }

    await CallbackPage.getInitialProps(context)

    expect(context.res.writeHead.mock.calls).toMatchSnapshot()
  })

  it('redirects to /login if `res` is undefined', async () => {
    await CallbackPage.getInitialProps({})

    expect(Router.replace).toHaveBeenCalledWith('/login')
  })
})
