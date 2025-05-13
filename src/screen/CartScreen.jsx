import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import CartCard from '../components/CartCard'
import { CartContext } from '../context/CartContext'

const CartScreen = () => {
    const isCart = true
    const { carts, totalPrice, deleteItemFromCart } = useContext(CartContext)
    return (
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.imageContainer}>
                <Header isCart={isCart} />
            </View>

            <FlatList
                data={carts}
                renderItem={({ item }) => <CartCard item={item} deleteItemFromCart={deleteItemFromCart} />}

                showsVerticalScrollIndicator={false}
                ListFooterComponent={<>
                    <View style={{
                        marginHorizontal: 6,
                        marginTop: 20,
                        gap: 14
                    }} >
                        <View style={{
                            flexDirection: 'row',


                            justifyContent: 'space-between'
                        }}>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 18,
                                color: '#757575'
                            }}>Total: </Text>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 18,
                                color: '#757575'
                            }}>${totalPrice}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 18,
                                color: '#757575'
                            }}>Shipping</Text>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 18,
                                color: '#757575'
                            }} >$0.0</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderTopColor: '#C0C0C0',
                                borderBottomColor: 'transparent',
                                borderLeftColor: 'transparent',
                                borderRightColor: 'transparent',
                                borderWidth: 2,
                                paddingTop: 14,


                            }}>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 18,
                                color: '#757575'
                            }}>Grand Total:</Text>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 18,
                                color: '#3C3C3C'
                            }} >${totalPrice}</Text>
                        </View>
                    </View></>}
                contentContainerStyle={{
                    paddingBottom: 80
                }}

            />
            {/* Checkout code ! */}

            <TouchableOpacity style={{
                backgroundColor: '#E96E6E',
                padding: 12,
                marginHorizontal: 16,
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 28,
                marginTop: 40
            }}>
                <Text style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 20

                }}>Checkout</Text>
            </TouchableOpacity>
            {/* <Text>CartScreen</Text> */}
        </LinearGradient >
    )
}

export default CartScreen

const styles = StyleSheet.create({
    imageContainer: {
        marginBottom: 20,
    },
    container: {
        flex: 1,
        padding: 15
    }
})