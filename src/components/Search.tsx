import { StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

interface SearchProps {
    setTerm: string
}

const Search = ({ setTerm }) => {

    const [input, setInput] = useState('')

    const handleEndEditing = () => {
        if (!input) return
        setTerm(input)
    }

    return (
        <View>
            <TextInput
                placeholder='Search for food or restaurants'
                onChangeText={(text) => setInput(text)}
                onEndEditing={handleEndEditing}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})