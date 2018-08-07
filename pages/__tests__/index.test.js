import React from 'react'
import { cleanup, render } from 'react-testing-library'
import IndexPage from '../index'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<IndexPage />)
})
