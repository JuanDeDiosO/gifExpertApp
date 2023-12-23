import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('test in useFetchGif hook', () => {
  test('should be return initial state', () => {
    const {
      result: { current }
    } = renderHook(() => useFetchGifs('Goku'))

    expect(current).toEqual({ images: [], isLoading: true })
  })
  test('should be return initial state', async () => {
    const { result } = renderHook(() => useFetchGifs('Goku'))

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))

    const {isLoading} = result.current
    expect(isLoading).toBeFalsy()
  })
})
