import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './stylesText'

export default function Subtitle(text) {
  return (<Text style={styles.subtitle}> {text} </Text>)
}