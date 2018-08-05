import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import { QueryForm } from '../QueryForm'

afterEach(cleanup)

it('updates route on submit', () => {
  const router = {
    push: jest.fn(),
    query: {},
  }

  const { getByLabelText, container } = render(<QueryForm router={router} />)

  const form = container.firstChild
  const input = getByLabelText('Query')

  input.value = 'foo bar'

  fireEvent.change(input)
  fireEvent.submit(form)

  expect(router.push).toHaveBeenCalledWith('/?query=foo%20bar')
})

it('does not update route on input value change', () => {
  const router = {
    push: jest.fn(),
    query: {},
  }

  const { getByLabelText } = render(<QueryForm router={router} />)

  const input = getByLabelText('Query')

  input.value = 'foo bar'

  fireEvent.change(input)

  expect(router.push).not.toHaveBeenCalled()
})

it('does not update route if submitted input value did not change', () => {
  const router = {
    push: jest.fn(),
    query: {},
  }

  const { container } = render(<QueryForm router={router} />)

  const form = container.firstChild

  fireEvent.submit(form)

  expect(router.push).not.toHaveBeenCalled()
})

it('renders apply button if input value changed', () => {
  const router = {
    push: jest.fn(),
    query: {},
  }

  const { queryByText, getByLabelText } = render(<QueryForm router={router} />)

  expect(queryByText('Apply')).not.toBeInTheDocument()

  const input = getByLabelText('Query')

  input.value = 'foo bar'

  fireEvent.change(input)

  expect(queryByText('Apply')).toBeInTheDocument()
})
