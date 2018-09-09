import React from 'react'
import { cleanup, render } from 'react-testing-library'
import BoardPage from '../board'

it('renders without crashing', () => {
  render(<BoardPage columns={[]} />)
  cleanup()
})
