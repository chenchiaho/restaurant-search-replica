import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Get some</Text>
            <Text style={styles.boldHeader}>Awesome food!</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    lightHeader: {
        fontSize: 35,
        fontStyle: 'italic'
    },
    boldHeader: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    container: {
        marginHorizontal: 25
    }
})