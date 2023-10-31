import {Text, View, Image, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';



const Login = () => {
    return (
        <View style={{flex: 1,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
             <Image source={require('../gambar/logo.jpg')}
              style={{width: 200, height: 200}}

              />
              <Text style={{fontSize:50, fontWeight: 'bold'}}>PUTRI_RESTO</Text>
              <Text style={{fontSize: 30}}>Login</Text>
              
            </View>
            
        
        </View>
    );
};


export default Login