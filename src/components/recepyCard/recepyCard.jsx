import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

// Assets
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { color } from '../../themes/colors/themes.colors';

export default function recepyCard({
    id,
    title,
    description,


    category,
    categoryId,

    featured,
    tags,
    image,
}) {
  return (
    <Pressable>

        {/* IMAGE */}
        <View>
        <Image
            source={
                image ?
                image
                : <MaterialCommunityIcons name="image-off" size={25} color={color.white} />}
        />

        </View>
        
        {/* TEXTO */}
        <View>


        </View>

    </Pressable>
  )
}