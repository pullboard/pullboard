import React from 'react'
import CallbackPage from '../callback'
import { render, cleanup } from 'react-testing-library'
import Router from 'next/router'

jest.mock('../../lib/github')

it('renders without crashing', () => {
  render(<CallbackPage />)
  cleanup()
})

describe('getInitialProps', () => {
  it('sets cookies and redirects to /', async () => {
    const context = {
      res: {
        setHeader: jest.fn(),
        writeHead: jest.fn(),
        end: jest.fn(),
      },
      query: {
        code: 'TEST_CODE',
      },
    }

    await CallbackPage.getInitialProps(context)

    expect(context.res.setHeader.mock.calls).toMatchSnapshot()
    expect(context.res.writeHead.mock.calls).toMatchSnapshot()
  })

  it('redirects to /login if `res` is undefined', async () => {
    await CallbackPage.getInitialProps({})

    expect(Router.push).toHaveBeenCalledWith('/login')
  })
})
