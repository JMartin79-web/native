import { View, Text, Pressable, Image, FlatList } from 'react-native'
import React from 'react'

// Assets
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { color } from '../../themes/colors/themes.colors';
import { styles } from './stylesRecepyCard';

export default function RecepyCard({
    id,
    title,
    description,

    category,
    categoryId,

    featured,
    tags,
    image,

    onCardPress,
}) {
    tagsArray = [...tags]
    //console.log(tagsArray)

  return (
    <Pressable
    style={({pressed}) => [styles.recepyCard, pressed && styles.recepyCardPressed]}
    onPress={onCardPress}
    >

        {/* IMAGE */}
        <View style={styles.imgContainer}>
        <Image
            style={styles.img}
            resizeMode='cover'
            source={image}
        />
        <MaterialCommunityIcons name="image-off" size={50} color={color.white}/>

        </View>
        
        {/* TEXTO */}
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text 
                ellipsizeMode='tail'
                numberOfLines={2}
                style={styles.description}>{description}
            </Text>

            <FlatList
                data={tagsArray}
                style={styles.tagsList}
                contentContainerStyle={styles.tags}
                renderItem={(tag)=>{
                    <Text> {tag.item} </Text>
                }}
                keyExtractor={(item) => item.id}

            />
        </View>

    </Pressable>
  )
}