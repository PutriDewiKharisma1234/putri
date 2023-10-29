import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/screens/Menu';
import Lokasi from './src/screens/Lokasi';
import Promo from './src/screens/Promo';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Pertama} options={{ headerShown:false }} />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown:false }} />
                <Stack.Screen name="Lokasi" component={Lokasi} options={{ headerShown:false }} />
                <Stack.Screen name="Promo" component={Promo} options={{ headerShown:false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

const Pertama = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 20, backgroundColor: '#84ffff'}}>
                <Text style={{ textAlign: 'center', color: '#263238', fontWeight: 'bold', fontSize: 50 }}> PUTRI_RESTO </Text>
            </View>

            <View>
              <Image style={{widht: 100, height: 100}} source={{ uri: "https://arsitag.b-cdn.net/wp-content/uploads/2022/11/cafe-industrial-design-1200x900.jpeg"}}/>
            </View>

            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30 ,  backgroundColor: '#84ffff'}} onPress={() => navigation.navigate('Menu')}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}> menu </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30 }} onPress={() => navigation.navigate('Lokasi')}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}> lokasi </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30 }} onPress={() => navigation.navigate('Promo')}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}> promo </Text>
            </TouchableOpacity>
        </View>
    );
};







export default App;


// import React, { Component } from 'react'
// import { View, Text, TouchableOpacity } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import menu from './src/screens/menu';

// const Stack = createNativeStackNavigator();


// const App = () => {
//     return (
//         <Pertama />
//     ) 
// };

// const Pertama = () => {
//      return (
//         <View style = {{flex : 1}}>
//         <View style = {{padding: 20, backgroundColor: '#84ffff' }}>
//         <Text style = {{textAlign: 'center', color: '#263238', fontWeight: 'bold', fontSize: 50}}> PUTRI_RESTO </Text>

//         </View>
        
      
//         <TouchableOpacity style = {{borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30}}>
//             <Text 
//             style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}> menu </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style = {{borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30}}>
//             <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}> lokasi </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style = {{borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30}}>
//             <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}> promo </Text>
//         </TouchableOpacity>
        

//         </View> 
        
//      );
// };




// export default App;