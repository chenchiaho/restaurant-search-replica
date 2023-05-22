import { useState } from "react"
import yelp from '../api/yelp'

interface ResultState {
  data: any[] | null
  loading: boolean
  error: string | null
}

type searchRestaurantsFn = (term: string) => Promise<void>

const useRestaurants = () => {

  const [results, setResults] = useState<ResultState>({
    data: null,
    loading: false,
    error: null,
  })

  const searchRestaurants: searchRestaurantsFn = async (term) => {
    setResults({
      data: null,
      loading: true,
      error: null,
    })
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 15,
          term,
          location: 'Toronto'
        }
      })
      setResults({
        data: response.data.businesses,
        loading: false,
        error: null,
      })

    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: 'Something went wrong',
      })
    }
  }
  return [results, searchRestaurants]
}

export default useRestaurants