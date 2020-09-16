import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import Name from './component/Name'

export default function App() {
  const [name, setName] = useState('Taro')
  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 80, width: 100}}
        placeholder="入力してください"
        onChangeText={name => setName(name)}
        multiline={true}
        clearButtonMode={'always'}
        autoFocus={true}
        keyboardAppearance={'dark'}
        keyboardType={"phone-pad"}
      />
      <Name name={'satoshi'} />
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
