import { useEffect } from 'react'
import { useState } from 'react'
import { getGif } from '../helpers/getGif'

export const useFetchGifs = categoryName => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const obtainGifs = async () => {
    setImages(await getGif(categoryName))
    setIsLoading(false)
  }

  useEffect(() => {
    obtainGifs(categoryName)
  }, [])

  return {
    images,
    isLoading
  }
}
