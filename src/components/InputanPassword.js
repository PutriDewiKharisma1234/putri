import {Text, View, Image, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const InputanPassword = (props) => {
    return (
        <View>
            <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 20}}>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#cfd8dc', width: 50, borderTopLeftRadius:20, borderBottomLeftRadius: 20}}>
                <Icon name="key" size={30} color="#455a64" />
                </View>
            
                <TextInput value = {props.password} 
                style={{flex: 1, backgroundColor: '#cfd8dc', borderTopRightRadius: 20, borderBottomRightRadius: 20, paddingVertical: 15}}
                placeholder='Masukkan Sandi'
                secureTextEntry={true}
                onChangeText={text => props.setPassword(text)}
                />
            </View>
        </View>
    );
}

export default InputanPassword;