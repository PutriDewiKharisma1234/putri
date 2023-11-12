import { ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <View>
            <View style={{flexDirection: 'row', padding: 20}}>
                <Text style={{fontSize: 40, fontWeight: 'bold', paddingVertical: 20, }}>profile</Text>
                <View style={{flex:1, alignItems: 'flex-end'}}>
                    <Image 
                    source={require('../gambar/user.jpg')}
                    style={{width:70, height: 70, borderRadius:25, marginTop: 10, }}
                    />
                </View>
                
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.inputs}>
                    <View style={{flexDirection: 'row', }}>
                        <View style={{backgroundColor: '#bdbdbd'}}>
                            <Text style={{fontSize:20, color: '#cfd8dc', paddingVertical: 10}}>Username</Text>
                            <TextInput placeholder='masukkan username'></TextInput>
                        </View>
                        <View style={{ flex: 1,alignItems: 'flex-end', backgroundColor: '#bdbdbd'}}>
                            <Text style={{color: '#448aff'}}>
                            Edit
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20 }}>
                        <View style={{backgroundColor: '#bdbdbd'}}>
                            <Text style={{fontSize:20, color: '#cfd8dc', paddingVertical: 10}}>Email</Text>
                            <TextInput placeholder='masukkan Email'></TextInput>
                        </View>
                        <View style={{ flex: 1,alignItems: 'flex-end', backgroundColor: '#bdbdbd'}}>
                            <Text style={{color: '#448aff'}}>
                            Edit
                            </Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={{backgroundColor: '#bdbdbd'}}>
                            <Text style={{fontSize:20, color: '#cfd8dc', paddingVertical: 10}}>Location</Text>
                            <TextInput placeholder='masukkan lokasi anda'></TextInput>
                        </View>
                        <View style={{ flex: 1,alignItems: 'flex-end', backgroundColor: '#bdbdbd'}}>
                            <Text style={{color: '#448aff'}}>
                            Edit
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default ProfileScreen

const styles = StyleSheet.create({
    inputs: {
        marginTop:  20,
        paddingHorizontal: 10
    }
})