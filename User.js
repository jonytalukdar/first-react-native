import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function User({ user }) {
  return (
    <View style={styles.container}>
      <Text>{user.title}</Text>
      <Image
        source={{
          uri: `${user.imageURL}`,
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    border: '1px solid blue',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '10px',
  },
});
