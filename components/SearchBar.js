import React from 'react'
import {TextInput , View, Text , StyleSheet} from 'react-native'

const SearchBar = () => {
    return (
        <View style={style.container}>
            <TextInput
            placeholder="Search Twitter"
            placeholderTextColor="grey" />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginLeft:6,
        borderWidth:1,
        borderRadius:15,
        width:250,
        paddingHorizontal:10,
        height:30
    }
})

export default SearchBar
