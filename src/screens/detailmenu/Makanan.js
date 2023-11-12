import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const makananData = [
  { id: '1', name: 'Bakso' },
  { id: '2', name: 'Sate' },
  { id: '3', name: 'Mie Ayam' },
  { id: '4', name: 'Ayam Goreng' },
  { id: '5', name: 'Seafood' },
 
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
    backgroundColor: '#f06292',
    fontSize: 50,
    padding: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f8bbd0',
    padding: 30,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  itemText: {
    fontSize: 30,
  },
});
