import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const ProductsSec = ({ item, handleLiked }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Product_Details', { item });
        }} style={styles.container}>
            <Image source={{ uri: item.thumbnail }} style={styles.coverImage} />

            <View style={styles.content}>
                <Text style={styles.title}> {item.title.slice(0, 6)} </Text>
                <Text style={styles.price}> ${item.price} </Text>

            </View>
            <TouchableOpacity
                onPress={() => handleLiked(item)}
                style={styles.likecontainer}>

                {
                    item?.isLiked ?
                        (<AntDesign name={'heart'} size={20} color={'red'} />) :
                        (<AntDesign name={'hearto'} size={20} color={'red'} />)

                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default ProductsSec

const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: 'relative'
    },
    coverImage: {
        resizeMode: 'contain',
        height: 236,
        width: '90%',
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 8
    },
    content: {
        paddingLeft: 12
    },
    title: {
        fontSize: 18,
        color: '#444444',
        fontWeight: '600'

    },
    price: {
        fontSize: 18, fontWeight: '600'
    },
    likecontainer: {
        height: 34,
        width: 34,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: 20,
        right: 15
    }

})