import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import useRestaurants from '../hooks/useRestaurants'

interface RestaurantsProps {
    term: string
}

const Restaurants = ({ term }: RestaurantsProps) => {

    const [{ data, loading, error }, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants(term)
    }, [term])

    return (
        <View>
            <Text>Restaurants</Text>
        </View>
    )
}

export default Restaurants

const styles = StyleSheet.create({})