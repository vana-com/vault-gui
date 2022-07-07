import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('Renders', () => {
    render(<Home />)

    const header = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(header)
  })
})
