import {  Text, View ,TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'


const Menu = ({navigation}) => {
    return (
       <View style={{flex: 1,
       justifyContent: 'center',
       alignItems: 'center'}}>
       
       <ImageBackground style={{width: 355, height: 685}} source={require('../gambar/backgroundmenu.webp')}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30 }} 
        onPress={() => navigation.navigate('Makanan')}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}> Food </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30 }} 
        onPress={() => navigation.navigate('Minuman')}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}> Drink </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30 }} 
        onPress={() => navigation.navigate('Camilan')}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}> Snack </Text>
        </TouchableOpacity>
        </View>
       </ImageBackground>



       
        

       </View>
    );
};



export default Menu


