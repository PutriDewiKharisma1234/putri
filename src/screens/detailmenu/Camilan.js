import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const camilanData = [
  { id: '1', name: 'Kentang Goreng' },
  { id: '2', name: 'Udang Rambutan' },
  { id: '3', name: 'Pangsit Goreng' },
  { id: '4', name: 'Jamur Crispy' },
  { id: '5', name: 'Dimsum' },
 
];

export default function Camilan() {
  const renderCamilan = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Camilan</Text>
      <FlatList
        data={camilanData}
        renderItem={renderCamilan}
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
    backgroundColor: '#eeff41',
    fontSize: 50,
    padding: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#f4ff81',
    padding: 30,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  itemText: {
    fontSize: 30,
  },
});
