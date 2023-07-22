import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './stylesText'

export default function Title(text) {
  return <Text style={styles.title}> {text} </Text>
}