import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Header from './Header'

it('renders', () => {
  const { asFragment } = render(<Header text='Hello!' />)
  expect(asFragment()).toMatchSnapshot()
})
