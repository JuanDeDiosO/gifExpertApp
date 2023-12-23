import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import { validateGifName } from '../helpers/validateGifName'

import { string } from 'prop-types'

export const GifCard = ({ title, src }) => {
  const name = validateGifName(title)

  return (
    <Card shadow='md'>
      <CardHeader>
        <p className='text-large font-bold mx-auto'>{name || 'unnamed'}</p>
      </CardHeader>
      <CardBody className='overflow-visible p-0'>
        <Image
          alt={title}
          className='w-full object-cover rounded-b-2xl h-[200px]'
          src={src}
          width='100%'
        />
      </CardBody>
    </Card>
  )
}

GifCard.propTypes = {
  title: string.isRequired,
  src: string.isRequired,
}
