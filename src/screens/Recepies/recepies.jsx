import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Recepies({
  onPress
}) {
  return (
    <View>
      <Text>recepies</Text>
      <Button title='volver' onPress={onPress}></Button>
    </View>
  )
}