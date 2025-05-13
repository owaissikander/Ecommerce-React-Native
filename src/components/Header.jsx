import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'




const Header = ({ isCart }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home_Stack')}} style={styles.appContainer}>

                {
                    isCart ? <Ionicons name={'chevron-back'} color={'red'} size={24} /> : <Image source={require('../assets/Icon.png')} style={styles.appIcon} />
                }

            </TouchableOpacity>
            {isCart && <Text style={{ fontSize: 24, color: 'black' }}>My Cart</Text>}
            <View>
                <Image source={require('../assets/Profile.jpg')} style={styles.dp} />
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    appIcon: {
        height: 28,
        width: 28
    },
    appContainer: {
        backgroundColor: "#ffffff",
        height: 44,
        width: 44,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dp: {
        height: 44,
        width: 44,
        borderRadius: 44
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 6
    }
})