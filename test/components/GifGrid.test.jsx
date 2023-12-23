import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('testing GifGrid component', () => {
  const category = 'Goku'

  test('should be content params', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid categoryName={category} />)
    expect(screen.getByText(category)).toBeTruthy()
    expect(screen.getByText('Is loading')).toBeTruthy()
  })

  test('should be show gif cards', () => {
    const gif = [
      { id: 1, title: 'hola', src: 'nice' },
      { id: 1, title: 'hola', src: 'nice' }
    ]

    useFetchGifs.mockReturnValue({
      images: gif,
      isLoading: false
    })

    render(<GifGrid categoryName={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
