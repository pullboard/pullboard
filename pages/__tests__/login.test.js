import React from 'react'
import { cleanup, render } from 'react-testing-library'
import LoginPage from '../login'

jest.mock('next/config')

afterEach(cleanup)

it('renders without crashing', () => {
  render(<LoginPage />)
})
