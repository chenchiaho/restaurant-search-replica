import { StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { elevation } from '../common/styles'

interface SearchProps {
    setTerm: (term: string) => void
}

const Search = ({ setTerm }: SearchProps) => {

    const [input, setInput] = useState('')

    const handleEndEditing = () => {
        if (!input) return
        setTerm(input)
    }

    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name='search' size={25} />
            <TextInput
                style={styles.input}
                placeholder='Food and restaurants'
                onChangeText={(text) => setInput(text)}
                onEndEditing={handleEndEditing}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    elevation,
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 40
    },
    input: {
        fontSize: 18,
        marginLeft: 10
    }

})