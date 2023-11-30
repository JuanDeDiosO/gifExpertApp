import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import { validateGifName } from '../helpers/validateGifName'

export const GifCard = ({ title, src, slug }) => {
  const name = validateGifName(title)

  return (
    <Card shadow='md'>
      <CardHeader>
        <p className='text-large font-bold mx-auto'>{name || 'unnamed'}</p>
      </CardHeader>
      <CardBody className='overflow-visible p-0'>
        <Image
          alt={slug}
          className='w-full object-cover rounded-b-2xl h-[200px]'
          src={src}
          width='100%'
        />
      </CardBody>
    </Card>
  )
}
