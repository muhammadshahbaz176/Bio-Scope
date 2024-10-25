// Hello.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Hello = () => {

  return (
    <View style={[styles.container, { backgroundColor: "black" }]}>
      <Text style={[styles.text, { color: "white" }]}>This is dashboard </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Hello;