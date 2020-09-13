import React from 'react';
import { Text, View } from 'react-native';

export default function Name(props) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{props.name}</Text>
    </View>
  );
}