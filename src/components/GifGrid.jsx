import { string } from 'prop-types'
import { Divider } from '@nextui-org/react'
import { GifCard } from './GifCard'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ categoryName }) => {
  const { images, isLoading } = useFetchGifs(categoryName)

  return (
    <div className='bg-gray-50 py-6 px-4 mb-10 rounded-2xl'>
      <h3 className='text-4xl text-indigo-950 text-center font-bold mb-4'>
        {categoryName}
      </h3>
      <Divider />
      <div className='grid grid-cols-4 gap-8 p-3 mt-4'>
        {isLoading
          ? 'Is loading'
          : images.length == 0
          ? <p className='mx-auto col-span-4 text-xl text-secondary-400 font-bold uppercase'>No se encontraron gifs</p>
          : images.map(({ id, ...imageContent }) => (
              <GifCard key={id} {...imageContent} />
            ))}
      </div>
    </div>
  )
}

GifGrid.propTypes = {
  categoryName: string.isRequired
}
