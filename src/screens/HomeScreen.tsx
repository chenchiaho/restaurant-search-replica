import { View, StyleSheet, StatusBar } from 'react-native'
import { useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Restaurants from '../components/Restaurants'

interface Category {
    name: string
    imageUrl: number
}

const commonCategories: Category[] = [
    {
        name: "Burger",
        imageUrl: require("../assets/images/burger.png"),
    },
    {
        name: "Pizza",
        imageUrl: require("../assets/images/pizza.png"),
    },
    {
        name: "Dessert",
        imageUrl: require("../assets/images/cake.png"),
    },
    {
        name: "Drink",
        imageUrl: require("../assets/images/smoothies.png"),
    },
    {
        name: "Steak",
        imageUrl: require("../assets/images/steak.png"),
    },
    {
        name: "Pasta",
        imageUrl: require("../assets/images/pasta.png"),
    },
]

const HomeScreen: React.FC = () => {

    const [term, setTerm] = useState<string>("Burger")
    return (
        <View>
            <Header />
            <Search setTerm={setTerm} />
            <Categories />
            <Restaurants />

        </View>
    )
}

export default HomeScreen