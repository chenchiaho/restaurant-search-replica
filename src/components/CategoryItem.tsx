import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { elevation } from '../common/styles'

interface CategoryItemProps {
    name: string
    imageUrl: ImageSourcePropType
    index: number
    active: boolean
    handlePress: () => void
}

const CategoryItem = ({ name, imageUrl, index, active, handlePress }: CategoryItemProps) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[
                styles.container,
                styles.elevation,
                index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
                active
                    ? {
                        backgroundColor: 'rgb(241,186,87)'
                    }
                    : {
                        backgroundColor: 'white'
                    }
            ]}>
                <View style={styles.imageContainer}>
                    <Image source={imageUrl} style={styles.image} />
                </View>
                <Text style={styles.header}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    elevation,
    image: {
        width: 35,
        height: 35
    },
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 5
    },
    header: {
        fontWeight: 'bold'
    }
})