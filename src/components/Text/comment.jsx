import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './stylesText'

export default function Comment(text) {
  return (<Text style={styles.comment}> {text} </Text>)
}