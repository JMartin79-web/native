import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from './stylesTaskItem'

const TaskItem = ({
    onPressItem,
    item
}) => {
  return (
    <TouchableOpacity
    onPress={()=>{onPressItem(item)}}
    style={styles.containerItem}
    >
      <Text style={styles.text}> {item.value} </Text>
      <Text style={styles.icon}> 🗑️ </Text>
    </TouchableOpacity>
  )
}

export default TaskItem