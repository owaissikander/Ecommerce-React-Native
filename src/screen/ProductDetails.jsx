import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Screen } from 'react-native-screens'
import Header from '../components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CartContext } from '../context/CartContext'

const ProductDetails = () => {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext)
  const route = useRoute()
  const item = route.params?.item
  // console.log('---------->', route.params?.item)



  const handleAddToCart = (item) => {
    addToCart(item);
    navigation.navigate('Cart')
  }
  return (
    <>
      <Header />
      <LinearGradient colors={['#fdf0f3', '#fffbfc']} style={styles.container} >

        <View >
          <Image style={styles.imageContainer} source={{ uri: item.thumbnail }} />
        </View>

        {/*Product details  Heading Container  */}
        <View style={styles.HeadingDetails}>
          <Text style={{
            fontSize: 20,
            color: '#444444'
          }}>{item.title.slice(0, 15)}</Text>
          <Text style={{
            fontSize: 20,
            color: '#4D4C4C'
          }}>${item.price}</Text>
        </View>

        <View>
          <Text style={{
            fontSize: 20,
            color: '##444444',
            marginHorizontal: 25
          }}>Size</Text>
          <View style={{
            flexDirection: 'row',
            gap: 20,
            paddingHorizontal: 10,
            marginHorizontal: 25,
            marginTop: 4,
          }}>
            <Text style={{ fontSize: 16 }}>S</Text>
            <Text style={{ fontSize: 16 }} >M</Text>
            <Text style={{ fontSize: 16 }} >L</Text>
            <Text style={{ fontSize: 16 }} >XL</Text>
          </View>
        </View>



        <View>
          <Text style={{
            fontSize: 20,
            color: '##444444',
            marginHorizontal: 25
          }}>
            Colors
          </Text>
          <View style={styles.colorsection}>
            <View style={{ height: 36, width: 36, backgroundColor: "#444444", borderRadius: 100 }}></View>
            <View style={{ height: 36, width: 36, backgroundColor: "#454444", borderRadius: 100 }}  ></View>
            <View style={{ height: 36, width: 36, backgroundColor: "#444444", borderRadius: 100 }}  ></View>
            <View style={{ height: 36, width: 36, backgroundColor: "#446444", borderRadius: 100 }}  ></View>
            <View style={{ height: 36, width: 36, backgroundColor: "#444444", borderRadius: 100 }}  ></View>
            <View style={{ height: 36, width: 36, backgroundColor: "#442444", borderRadius: 100 }}  ></View>

          </View>
        </View>

        <TouchableOpacity onPress={() => handleAddToCart(item)} style={{
          backgroundColor: '#E96E6E',
          padding: 12,
          marginHorizontal: 16,
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 28
        }}>
          <Text style={{
            color: 'white',
            fontWeight: '600',
            fontSize: 20

          }}>Add to Cart</Text>
        </TouchableOpacity>

      </LinearGradient>
    </>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  colorsection: { flexDirection: 'row', padding: 10, gap: 8, marginHorizontal: 16, },
  imageContainer: {
    resizeMode: 'contain',
    height: 350,
    width: 418,


  },
  HeadingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 25,
    marginVertical: 12

  }
})