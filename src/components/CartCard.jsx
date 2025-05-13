import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
const CartCard = ({ item, deleteItemFromCart }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.coverImage} source={{ uri: item.thumbnail }} />
            <View style={styles.cartContainer}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 18,
                    color: '#444444'
                }}>
                    {item.title.slice(0, 12)}
                </Text>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 18,
                    color: '#797979',
                    marginVertical: 10
                }} >
                    ${item.price}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <View style={{
                        height: 32,
                        width: 32,
                        backgroundColor: '#7094C1',
                        borderRadius: 16
                    }} />
                    <View>
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 18,
                            color: '#444444',
                            marginStart: 15

                        }} >L</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={() => { deleteItemFromCart(item) }}>

                <FontAwesome6 name={'trash'} color={'#F68CB5'} size={24} />
            </TouchableOpacity>

        </View>
    )
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',

    },
    coverImage: {
        height: 125,
        width: '25%',
        borderRadius: 20
    },
    cartContainer: {
        flex: 1,
        marginLeft: 20
    }
})