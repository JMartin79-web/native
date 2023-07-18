import React from 'react'
import { View, Text,TextInput, TouchableOpacity, Pressable } from 'react-native'

// Estilos
import {styles} from "./stylesSearch"
import { color } from '../../themes/colors/themes.colors'

//iconos
import { FontAwesome } from '@expo/vector-icons'; 

const search = ({
    value,
    placeholder,
    borderBottomColor,
    onHandlerChangeText,

    onHandleBlur,
    onHandleFocus,

    onSearch,
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
        onPress={onSearch}
        >
            <FontAwesome name="search" size={25} color={color.white} />
        </Pressable>

        <Pressable
        style={({pressed}) => [styles.btn, pressed && styles.btnPressed]}
        onPress={onClose}
        >
            <FontAwesome name="close" size={25} color={color.white} />
        </Pressable>

    </View>
  )
}

export default search