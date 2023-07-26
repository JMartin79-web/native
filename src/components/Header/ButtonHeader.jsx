import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles.buttonheader'

export function ButtonHeader({focus,icon}) {
  return (
        <View
        style={focus ?styles.btnHeaderFocus :styles.btnHeader}
        >
            {icon}
        </View>
    

  )
}