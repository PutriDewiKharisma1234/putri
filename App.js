import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Menu from './src/screens/Menu';
import Login from './src/screens/Login';
import Promo from './src/screens/Promo';
import Makanan from './src/screens/detailmenu/Makanan';
import Minuman from './src/screens/detailmenu/Minuman';
import Camilan from './src/screens/detailmenu/Camilan';
import SettingsScreen from './src/screens/SettingsScreen';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Pertama} options={{ headerShown: false, }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="awal">
                <Stack.Screen name="awal" component={Bottom} options={{ headerShown:false }} />
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown:false }} />
                <Stack.Screen name="Lokasi" component={Login} options={{ headerShown:false }} />
                <Stack.Screen name="Promo" component={Promo} options={{ headerShown:false }} />
                <Stack.Screen name="Makanan" component={Makanan} options={{ headerShown:false }} />
                <Stack.Screen name="Minuman" component={Minuman} options={{ headerShown:false }} />
                <Stack.Screen name="Camilan" component={Camilan} options={{ headerShown:false }} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
};

const Pertama = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10}}>
            <ImageBackground style={{width: 340, height: 200}} source={{ uri: "https://arsitag.b-cdn.net/wp-content/uploads/2022/11/cafe-industrial-design-1200x900.jpeg"}}>
            <Text style={{ padding:50, textAlign: 'center', color: '#ffeb3b', fontWeight: 'bold', fontSize: 45 }}> WELCOME To PUTRI_RESTO </Text>

            </ImageBackground>
                
            </View>

            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30 }} onPress={() => navigation.navigate('Menu')}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}> menu </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10, borderRadius: 30 }} onPress={() => navigation.navigate('Lokasi')}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}> login </Text>
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