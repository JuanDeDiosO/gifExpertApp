import { render, screen } from '@testing-library/react'
import { GifCard } from '../../src/components/GifCard'

describe('test in GifCard', () => {
  const gifContent = {
    title: 'Example',
    src: 'http://example-src/'
  }

  test('should be render component', () => {
    render(<GifCard {...gifContent} />)

    expect(screen).toMatchSnapshot()
  })
  test('should show the correct alt and url', () => {
    render(<GifCard {...gifContent} />)

    const { src, alt } = screen.getByRole('img')

    expect(src).toBe(gifContent.src)
    expect(alt).toBe(gifContent.title)
  })
  test('should show the correct title', () => {
    render(<GifCard {...gifContent} />)

    expect(screen.getByText(gifContent.title))
  })
})
