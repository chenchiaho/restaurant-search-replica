import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantItem from './RestaurantItem'
import { useNavigation, NavigationProp } from '@react-navigation/native'

interface RestaurantsProps {
    term: string
}

const Restaurants = ({ term }: RestaurantsProps) => {
    const navigation = useNavigation<NavigationProp<any>>()
    const [results, searchRestaurants] = useRestaurants()
    const { data, loading, error } = results

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
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList
                data={data}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) =>
                    <RestaurantItem restaurant={item}
                        navigation={navigation}
                    />}
            />
        </View>
    )
}

export default Restaurants

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    }
})