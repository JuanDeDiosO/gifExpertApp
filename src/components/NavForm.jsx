import { Input, Button } from '@nextui-org/react'
import { useState } from 'react'

export const NavForm = ({ onAddCategory }) => {
  const [value, setValue] = useState('')

  const handleOnSubmit = event => {
    event.preventDefault()

    onAddCategory(value)
    setValue('')
  }

  return (
    <form onSubmit={handleOnSubmit} className='col-start-1 col-end-5'>
      <Input
        type='text'
        radius='2xl'
        color={'secondary'}
        value={value}
        onChange={e => setValue(e.target.value)}
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
