import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    loadCartItems()
  }, [])

  const deleteItemFromCart = async (item) => {
    const newItems = carts.filter((cart) => cart.id !== item.id)
    await AsyncStorage.setItem('carts', JSON.stringify(newItems))
    setCarts(newItems)
    totalSum(newItems)
  }

  const loadCartItems = async () => {
    let carts = await AsyncStorage.getItem('carts')
    carts = carts ? JSON.parse(carts) : []
    setCarts(carts)
    totalSum(carts)
  }

  const addToCart = async item => {
    const itemExist = carts.findIndex(cart => cart.id === item.id)
    if (itemExist === -1) {
      const newCartItem = [...carts, item]
      await AsyncStorage.setItem('carts', JSON.stringify(newCartItem))

      setCarts(newCartItem)
      totalSum(newCartItem)
    }
  }

  const totalSum = (carts) => {
    const totalSum = carts.reduce((amount, item) => amount + item.price, 0)
    setTotalPrice(totalSum)
  }

  const value = {
    carts,
    addToCart,
    totalPrice,
    deleteItemFromCart
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
