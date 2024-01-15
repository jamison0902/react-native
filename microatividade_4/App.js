import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const generateNames = () => [
  { key: 'Devin' },
  { key: 'Dan' },
  { key: 'Dominic' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  item: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'lightblue',
    padding: 0,
    fontSize: 18,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={generateNames()}
        renderItem={({ item }) => {
          // Verifica se a lista está vazia
          if (!item) {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>A lista está vazia</Text>
              </View>
            );
          } else {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.key}</Text>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default FlatListBasics;