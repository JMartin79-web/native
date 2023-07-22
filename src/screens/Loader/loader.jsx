import { View, Text } from 'react-native'
import React from 'react'

// Assets
import { styles } from './stylesLoader'

export default function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <Text style={styles.text}>Loading</Text>
    </View>
  )
}