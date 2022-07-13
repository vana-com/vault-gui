import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('Renders', () => {
    const home = render(<Home />)
    expect(home)
  })
})
