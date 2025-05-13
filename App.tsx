import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screen/HomeScreen'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductDetails from './src/screen/ProductDetails'
import CartScreen from './src/screen/CartScreen'
import { CartContext, CartProvider } from './src/context/CartContext'
import CartCard from './src/components/CartCard'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
function Home () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}
const MyHomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Product_Details' component={ProductDetails} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
             
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor : '#e96e6e'
          }}
        >
          <Tab.Screen
            name='Home_Stack'
            component={MyHomeScreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                return <Entypo name={'home'} size={size} color={color} />
              }
            }}
          />
          <Tab.Screen
            name='Reorder'
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <MaterialIcons name={'reorder'} size={size} color={color} />
                )
              }
            }}
          />
          <Tab.Screen
            name='Cart'
            component={CartScreen}
            options={{
              tabBarIcon: ({ size, color }) => {
                const { carts } = useContext(CartContext)
                console.log('====>>>>>>', carts)

                return (
                  <View
                    style={{
                      position: 'relative'
                    }}
                  >
                    <MaterialCommunityIcons
                      name={'cart'}
                      size={size}
                      color={color}
                    />

                    <View
                      style={{
                        height: 14,
                        width: 14,
                        borderRadius: 7,
                        backgroundColor: color,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: -6,
                        right: -7
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'white'
                        }}
                      >
                        {carts?.length}
                      </Text>
                    </View>
                  </View>
                )
              }
            }}
          />
          <Tab.Screen
            name='Account'
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <MaterialCommunityIcons
                    name={'account'}
                    size={size}
                    color={color}
                  />
                )
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
