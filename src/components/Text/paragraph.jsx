import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './stylesText'

export default function Paragraph(text) {
  return (<Text style={styles.paragraph}> {text} </Text>)
}