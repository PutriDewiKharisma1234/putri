import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const makananData = [
  { id: '1', name: 'Nasi Goreng' },
  { id: '2', name: 'Mie Ayam' },
  { id: '3', name: 'Ayam Goreng' },
  { id: '4', name: 'Bakso' },
  { id: '5', name: 'Sate' },
 
];

export default function Makanan() {
  const renderMakanan = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Makanan</Text>
      <FlatList
        data={makananData}
        renderItem={renderMakanan}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#84ffff',
    fontSize: 50,
    padding: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#b3e5fc',
    padding: 30,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  itemText: {
    fontSize: 30,
  },
});
