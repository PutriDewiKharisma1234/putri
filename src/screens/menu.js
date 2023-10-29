import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const Menu = () => {
    return (
       <View style= {styles.container}>
         <Image style={styles.image} source={{ uri: "https://restodikudus.com/wp-content/uploads/2022/04/Nila.jpg"}}/>
       </View>
    );
};



export default Menu

const styles = StyleSheet.create({
  container: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 380,
    height: 700,
  },
});

