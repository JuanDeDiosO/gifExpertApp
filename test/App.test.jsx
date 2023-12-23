import { render, screen, fireEvent } from '@testing-library/react'
import App from '../src/App'

describe('test in App', () => {
  test('should be render search bar', () => {
    render(<App />)

    expect(
      screen.getByPlaceholderText('Escribe el nombre del gif que quieras')
    ).toBeTruthy()
    expect(screen.getByText('Buscar')).toBeTruthy()
  })
  test('should be render the gif when click on the search-button', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(
      'Escribe el nombre del gif que quieras'
    )
    const button = screen.getByText('Buscar')

    const category = 'Valorant'

    fireEvent.input(input, { target: { value: category } })
    fireEvent.click(button)

    expect(screen.getByText(category)).toBeTruthy()
  })
  test('should show multiple gifs when there are more than one search', () => {
    render(<App />)

    // First search
    const category = 'Valorant'
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: category }
    })
    fireEvent.click(screen.getByText('Buscar'))
    
    // Second search
    const category2 = 'One puchman'
    fireEvent.input(screen.getByRole('textbox'), {
      target: { value: category2 }
    })
    fireEvent.click(screen.getByText('Buscar'))

    expect(screen.getByText(category)).toBeTruthy()
    expect(screen.getByText(category2)).toBeTruthy()
  })
})
