import {Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import InputanEmail from '../components/InputanEmail';
import InputanPassword from '../components/InputanPassword';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{flex: 1,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
             <Image source={require('../gambar/logo.jpg')}
              style={{width: 200, height: 200}}

              />
              <Text style={{fontSize:50, fontWeight: 'bold'}}>PUTRI_RESTO</Text>
              
            </View>

            <InputanEmail email={email} setEmail={setEmail}/>
            <InputanPassword password={password} setPassword={setPassword}/>
           
            <TouchableOpacity style={{backgroundColor: '#84ffff', paddingVertical: 15, marginTop: 50, marginHorizontal: 90, borderRadius: 20, elevation: 5}}>
                <Text style={{color: '#1565c0', textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}> LOGIN </Text>
            </TouchableOpacity>

        </View>
    );
};


export default Login