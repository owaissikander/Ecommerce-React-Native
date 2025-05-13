import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from '../components/Category';
import ProductsSec from '../components/ProductsSec';

const categories = ['Trending Now', 'All', "News", "Mens", "Womens"]
const HomeScreen = () => {
    const [isLiked, setIsLiked] = useState(false)
    const [post, setPost] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('Trending Now')
    const [searchLower, setSearchLower] = useState('')

    useEffect(() => {

        fetch('https://dummyjson.com/products').then((res) => res.json())
            .then((data) => setPost(data.products)
            );
    }, [])
    
    const handleLiked = (item) => {
        const newProduct = post.map((prod) => {
            if (prod.id === item.id) {
                return {
                    ...prod,
                    isLiked: true
                }
            }
            return prod
        })
        setPost(newProduct)
    }


    return (
        <LinearGradient colors={['#fdf0f3', '#fffbfc']} style={styles.container} >
            <Header />

            {/* <Category /> */}

            {/* Products Section */}
            <FlatList
                data={post}
                renderItem={({ item, index }) =>
                    <ProductsSec
                        item={item}
                        handleLiked={handleLiked} />}
                ListHeaderComponent={
                    <>
                        <Text style={styles.mainHeading}>Match Your Style</Text>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconcontainer}>
                                <Fontisto name={'search'} size={26} color={'#c0c0cc0'} />
                            </View>
                            <TextInput style={styles.textinput} placeholder='Search' />
                        </View>

                        <FlatList
                            data={categories}
                            renderItem={({ item }) => (
                                <Category item={item}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory} />)}
                            keyExtractor={(item) => item}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />

                    </>
                }
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 150
                }}


            />
            {/* <View style={{   flexDirection : "row"}}>
               <ProductsSec/>
               <ProductsSec/>
               </View><View style={{   flexDirection : "row"}}>
               <ProductsSec/>
               <ProductsSec/>
               </View> */}

        </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 50
    },
    container: {

        padding: 20

    },
    mainHeading: {
        fontSize: 28,
        color: '#000000',
        marginTop: 25
    },
    inputContainer: {
        backgroundColor: '#ffffff',
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    iconcontainer: {

        marginHorizontal: 15
    },
    textinput: {

        flex: 1,

    }
})