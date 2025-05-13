import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text
                style={[
                    styles.categoryText,
                    selectedCategory === item &&
                    {
                        color: '#ffffff',
                        backgroundColor: '#e96e6e'
                    }]}>{item} </Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#938f8f",
        backgroundColor: "#dfdcdc",
        padding: 20,
        textAlign: 'center',
        borderRadius: 60,
        marginHorizontal: 6,
        paddingHorizontal: 20,
        paddingVertical: 10

    }

})