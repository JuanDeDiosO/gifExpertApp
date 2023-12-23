import { Input, Button } from '@nextui-org/react'
import { useState } from 'react'
import { func } from 'prop-types'

export const NavForm = ({ onAddCategory }) => {
  const [value, setValue] = useState('')

  const handleOnSubmit = event => {
    event.preventDefault()

    if (value.trim().length <= 1) return

    onAddCategory(value.trim())
    setValue('')
  }

  const handleOnChange = ({ target }) => setValue(target.value)

  return (
    <form
      onSubmit={handleOnSubmit}
      className='col-start-1 col-end-5'
      aria-label='form'
    >
      <Input
        type='text'
        radius='2xl'
        color={'secondary'}
        value={value}
        onChange={handleOnChange}
        endContent={
          <Button color='secondary' type='submit'>
            Buscar
          </Button>
        }
        placeholder='Escribe el nombre del gif que quieras'
      />
    </form>
  )
}

NavForm.propTypes = {
  onAddCategory: func.isRequired
}
