import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles.buttonheader'

export function ButtonHeader({
    content,
    page,
    onPress,
    name,
    icon
}) {
  return (
        <TouchableOpacity
        style={page==content ?styles.btnHeaderFocus :styles.btnHeader}
        onPress={onPress}
        name={name}
        content={content}
        >
            {icon}
        </TouchableOpacity>
    

  )
}