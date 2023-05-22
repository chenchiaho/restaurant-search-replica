import { FlatList, ImageSourcePropType, View } from 'react-native'
import CategoryItem from './CategoryItem'
import React from 'react'

interface Category {
    name: string
    imageUrl: ImageSourcePropType
}

interface CategoriesProps {
    commonCategories: Category[]
    term: string
    setTerm: (term: string) => void
}

const Categories = ({ term, setTerm, commonCategories }: CategoriesProps) => {
    return (
        <View>
            <FlatList
                data={commonCategories}
                renderItem={({ item, index }) => {
                    return (
                        <CategoryItem
                            name={item.name}
                            imageUrl={item.imageUrl}
                            index={index}
                            active={item.name === term}
                            handlePress={() => setTerm(item.name)}
                        />
                    )
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(category) => category.name}
            />
        </View>
    )
}

export default Categories
