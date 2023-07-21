import React from 'react'
import { View, Text,TextInput, TouchableOpacity, Pressable } from 'react-native'

// Estilos
import {styles} from "./stylesSearch"
import { color } from '../../themes/colors/themes.colors'

//iconos
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const SimpleSearch = ({
    value,
    placeholder,
    borderBottomColor,
    onHandlerChangeText,

    onHandleBlur,
    onHandleFocus,

    onSearch,
    onSearchDisable,
    onClose,
}) => {
  return (
    <View style={styles.container}>
        <TextInput
            style={[styles.search, {borderBottomColor}]}
            value={value}
            onChangeText={onHandlerChangeText} 

            placeholder={placeholder}
            autoCapitalize="none"

            cursorColor={color.red}
            onFocus={onHandleFocus}
            onBlur={onHandleBlur}
        />

        <Pressable
        style={({pressed}) => [styles.btn, pressed && styles.btnPressed]}
        onPress={onClose}
        >
            <MaterialCommunityIcons name="close" size={30} color={color.white} />
        </Pressable>

    </View>
  )
}

export default SimpleSearch