import { render, screen, fireEvent } from '@testing-library/react'
import { NavForm } from '../../src/components/NavForm'

describe('test in NavForm component', () => {
  const options = { target: { value: 'Saitama' } }

  test('should be change input value', () => {
    render(<NavForm onAddCategory={() => {}} />)

    const inputText = screen.getByRole('textbox')

    fireEvent.input(inputText, options)

    expect(inputText.value).toBe(options.target.value)
  })

  test('should be call onAddCategory function when the input have a value', () => {
    const onAddCategory = jest.fn()

    render(<NavForm onAddCategory={onAddCategory} />)

    const inputText = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(inputText, options)
    fireEvent.submit(form)

    expect(inputText.value).toBe('')
    expect(onAddCategory).toHaveBeenCalledWith(options.target.value)
  })

  test('should never call onAddCategory if the input not have a value', () => {
    const onAddCategory = jest.fn()

    render(<NavForm onAddCategory={onAddCategory} />)

    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onAddCategory).not.toHaveBeenCalled()
  })
})
