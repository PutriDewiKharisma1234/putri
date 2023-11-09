import {Text, View, Image, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const InputanEmail = (props) => {
    return (
        <View>
            <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 70}}>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#cfd8dc', width: 50, borderTopLeftRadius:20, borderBottomLeftRadius: 20}}>
                <Icon name="at" size={30} color="#455a64" />
                </View>
            
                <TextInput value = {props.email} 
                style={{flex: 1, backgroundColor: '#cfd8dc', borderTopRightRadius: 20, borderBottomRightRadius: 20, paddingVertical: 15}}
                placeholder='Masukkan Email'
                onChangeText={text => props.setEmail(text)}
                />
            </View>
        </View>
    );
}

export default InputanEmail;