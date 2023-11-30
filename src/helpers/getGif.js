export const getGif = async categoryName => {
  const URL = `https://api.giphy.com/v1/gifs/search/?api_key=${
    import.meta.env.VITE_API_KEY
  }&q=${categoryName}&limit=10`

  const res = await fetch(URL)
  const { data } = await res.json()

  return data.map(({ id, title, images, slug }) => ({
    id,
    title,
    src: images.downsized_medium.url,
    slug
  }))
}
