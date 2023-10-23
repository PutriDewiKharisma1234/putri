import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'


const App = () => {
    return <Pertama />;
};

const Pertama = () => {
     return (
        <View style = {{flex : 1}}>
        <View style = {{padding: 20, backgroundColor: '#84ffff' }}>
        <Text style = {{textAlign: 'center', color: '#263238', fontWeight: 'bold', fontSize: 50}}> PUTRI_RESTO </Text>

        </View>
      
        <TouchableOpacity style = {{borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30}}>
            <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}> menu </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30}}>
            <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}> lokasi </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30}}>
            <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}> promo </Text>
        </TouchableOpacity>
        

        </View> 
     );
};


export default App;