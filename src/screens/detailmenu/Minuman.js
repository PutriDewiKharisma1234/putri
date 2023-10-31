import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const minumanData = [
  { id: '1', name: 'Air Mineral' },
  { id: '2', name: 'Es Teh' },
  { id: '3', name: 'Es Jeruk' },
  { id: '4', name: 'Jus Buah' },
  { id: '5', name: 'Kopi' },
 
];

export default function Minuman() {
  const renderMinuman = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Minuman</Text>
      <FlatList
        data={minumanData}
        renderItem={renderMinuman}
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
    backgroundColor: '#64ffda',
    fontSize: 50,
    padding: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#a7ffeb',
    padding: 30,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  itemText: {
    fontSize: 30,
  },
});
