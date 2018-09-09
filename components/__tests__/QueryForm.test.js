import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import { QueryForm } from '../QueryForm'

afterEach(cleanup)

it('updates route on submit', () => {
  const router = {
    pathname: '/',
    query: {},
    push: jest.fn(),
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
    pathname: '/',
    query: {},
    push: jest.fn(),
  }

  const { getByLabelText } = render(<QueryForm router={router} />)

  const input = getByLabelText('Query')

  input.value = 'foo bar'

  fireEvent.change(input)

  expect(router.push).not.toHaveBeenCalled()
})

it('does not update route if submitted input value did not change', () => {
  const router = {
    pathname: '/',
    query: {},
    push: jest.fn(),
  }

  const { container } = render(<QueryForm router={router} />)

  const form = container.firstChild

  fireEvent.submit(form)

  expect(router.push).not.toHaveBeenCalled()
})

it('renders apply button if input value changed', () => {
  const router = {
    pathname: '/',
    query: {},
    push: jest.fn(),
  }

  const { queryByText, getByLabelText } = render(<QueryForm router={router} />)

  expect(queryByText('Apply')).not.toBeInTheDocument()

  const input = getByLabelText('Query')

  input.value = 'foo bar'

  fireEvent.change(input)

  expect(queryByText('Apply')).toBeInTheDocument()
})

it('updates input value when query prop changes', () => {
  const router = {
    pathname: '/',
    query: { query: 'foo' },
    push: jest.fn(),
  }

  const { getByLabelText, rerender } = render(<QueryForm router={router} />)

  const inputValue = getByLabelText('Query').value
  expect(inputValue).toBe('foo')

  rerender(<QueryForm router={{ ...router, query: { query: 'bar' } }} />)

  const newInputValue = getByLabelText('Query').value
  expect(newInputValue).toBe('bar')
})
