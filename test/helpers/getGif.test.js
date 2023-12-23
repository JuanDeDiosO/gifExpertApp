import { getGif } from '../../src/helpers/getGif'

describe('Test in getGif()', () => {
  test('should return a gif array', async () => {
    const gifs = await getGif('Valorant')

    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      src: expect.any(String),
      slug: expect.any(String)
    })
  })
})
