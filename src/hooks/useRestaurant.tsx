import { useState } from "react"
import yelp from "../api/yelp"

interface ResultState {
    data: any[] | null
    loading: boolean
    error: string | null
}

type SearchRestaurantFn = (id: string) => Promise<void>

const useRestaurant = () => {

    const [result, setResult] = useState<ResultState>({
        data: null,
        loading: false,
        error: null
    })


    const searchRestaurant: SearchRestaurantFn = async (id) => {

        setResult({
            data: null,
            loading: true,
            error: null
        })

        try {
            const response = await yelp.get(`${id}`, {

            })
            setResult({
                data: response.data,
                loading: false,
                error: null
            })
        } catch (error) {
            setResult({
                data: null,
                loading: false,
                error: "Something went wrong"
            })

        }

    }
    return [result, searchRestaurant]
}
export default useRestaurant
