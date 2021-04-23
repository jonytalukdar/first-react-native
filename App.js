import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import User from './User';

export default function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://arcane-shelf-91213.herokuapp.com/books')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Hello React App</Text>
      <Text> Total Friends : {users.length}</Text>
      {users.map((user) => (
        <User user={user}></User>
      ))}
      <Text style={{ fontSize: '50px' }}>{name}</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        onChangeText={(text) => setName(text)}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue=""
      />
      {users.map((user) => (
        <Text>{user.name}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
