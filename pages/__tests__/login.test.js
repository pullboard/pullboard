import React from 'react'
import { cleanup, render } from 'react-testing-library'
import LoginPage from '../login'

it('renders without crashing', () => {
  render(<LoginPage />)
  cleanup()
})
