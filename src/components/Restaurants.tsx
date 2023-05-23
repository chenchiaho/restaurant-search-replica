import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantItem from './RestaurantItem'

interface RestaurantsProps {
    term: string
}

const Restaurants = ({ term }: RestaurantsProps) => {

    const [{ data, loading, error }, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants(term)
    }, [term])

    if (loading) return <ActivityIndicator size='large' />
    if (error) {
        return (
            <View>
                <Text>{error}</Text>
            </View>
        )
    }
    return (
        <View >
            <Text >Top Restaurants</Text>
            <FlatList
                data={data}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => <RestaurantItem restaurant={item} />}
            />
        </View>
    )
}

export default Restaurants

const styles = StyleSheet.create({})