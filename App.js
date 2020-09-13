import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Name from './component/Name'

export default function App() {
  const [name, setName] = useState('Taro')
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: 'red' }}>ReactNative開発</Text>
      <Name name={'satoshi'} />
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Button onPress={() => setName('Jiro')} title="Change Name"/>
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
