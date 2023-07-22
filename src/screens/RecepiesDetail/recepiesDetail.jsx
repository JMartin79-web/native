import { View, Text, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'

// Styles
import { styles } from './stylesRecepiesDetail'
import { color } from '../../themes/colors/themes.colors';

//iconos
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

// Data
import RECEPIES from "../../components/data/recepies.json"

// Components

export default function RecepiesDetail({
  navigation, route
}) {

  const {recepyId} = route.params

  const recepyFind = RECEPIES.find((recepy)=> recepy.id === recepyId)

  const onSelectedCategory = ({categoryId,categoryName}) =>{
    navigation.navigate("recepies", {categoryId,categoryName})
  }

  return (
  <ScrollView>

    
    <View style={styles.container}>


      {/* BOTON VOLVER */}
      <Pressable
        style={styles.recepybtnBack}
        onPress={()=>onSelectedCategory({categoryId: recepyFind.id,categoryName: recepyFind.category})}>
        <FontAwesome
        name="angle-left"
        size={35}
        color={color.darkGrey}/>
          <Text style={styles.recepybtnBackText}>Volver</Text>
      </Pressable>
      
      <View style={styles.recepyImageContainer} >
        <Image
          style={styles.recepyImage}
          resizeMode='contain'
          //source={recepyFind.image}
        />
        <MaterialCommunityIcons
          name="image-off"
          size={50}
          style={styles.recepyImageIcon}
          color={color.white}/>
      </View>



      <Text style={styles.title}> {recepyFind.title} </Text>
      
      <View style={styles.recepyDetail}>
        <Text> {recepyFind.description} </Text>
      </View>

    </View>
  </ScrollView>
  )
}