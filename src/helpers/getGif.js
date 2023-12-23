export const getGif = async categoryName => {
  const api = 'wIb4xHJPajYw7nnDPJZbbgZugA9hFmuu'

  const URL = `https://api.giphy.com/v1/gifs/search/?api_key=${api}&q=${categoryName}&limit=10`

  const res = await fetch(URL)
  const { data } = await res.json()

  return data.map(({ id, title, images, slug }) => ({
    id,
    title,
    src: images.downsized_medium.url,
    slug
  }))
}
