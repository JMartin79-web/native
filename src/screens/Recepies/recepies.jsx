import React, {useState} from 'react'
import { View, Text, Image, Pressable, FlatList } from 'react-native'

// Estilos
import { styles } from './stylesRecepies'
import { color } from '../../themes/colors/themes.colors'

//iconos
import { FontAwesome } from '@expo/vector-icons'; 
import noFoodIcon from "../../../assets/img/recepies/noFoodIcon.png"

// Components
import SimpleSearch from '../../components/search/simpleSearch';

// Data
import RECEPIES from "../../components/data/recepies.json"

export default function Recepies({
  onPress, categoryId, categoryName
}) {


  const [filteredRecepies, setFilteredRecepies] = useState([filteredRecepiesByCategory])
  const [search, setSearch] = useState("")
  const [borderBottomColor, setBorderBottomColor] = useState(color.darkGrey);


    // Funciones para manejar el input
    const onHandleClose = () => {
      setSearch("")
      setFilteredRecepies(filteredRecepiesByCategory)
    }

    // Manage text in the input
    const onHandlerChangeText = (text) => {
      setSearch(text)
      filteredBySearch(text)
    };

    // Manage on focus
    const onHandleFocus = () => {setBorderBottomColor(color.pink)};
    // Manage on blur
    const onHandlerBlur = () => {setBorderBottomColor(color.darkGrey)};

    //FILTRADO DE RECETAS

    const filteredRecepiesByCategory = RECEPIES.filter((recepy)=>{

      // si son las destacadas
      if(categoryId === 1){
        if(recepy.featured){
          return recepy
        }
      }
      // Si son todas
      else if(categoryId === 5){
        return recepy

      }
      // Si son dulce-salado-agridulce
      else {
        if(recepy.categoryId === categoryId) {return recepy}
      }
      
    })

    //FILTRADO DE RECETAS POR SEARCH
    const filteredBySearch = (query) =>{
      let updatedRecepies = [...filteredRecepiesByCategory]

      updatedRecepies = updatedRecepies.filter((recepy)=>{
        return recepy.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })

      setFilteredRecepies(updatedRecepies)
    }



  return (
    <View style={styles.container} >
      
      {/* BOTON VOLVER */}
      <Pressable style={styles.btnBack} onPress={onPress}>
        <FontAwesome
        name="angle-left"
        size={35}
        color={color.darkGrey}/>
        <Text  style={styles.btnBackText}>Volver</Text>
      </Pressable>

      {/* SEARCH INPUT */}
      <SimpleSearch
      value={search}
      onHandlerChangeText={onHandlerChangeText}
      borderBottomColor={borderBottomColor}

      autoCorrect={false}
      placeholder="Buscar"
      placeholderTextColor= {color.darkGrey}
      onHandleBlur={onHandlerBlur}
      onHandleFocus={onHandleFocus}
      onClose={onHandleClose}
      />


      {/* LISTA DE RECETAS */}
      <View style={styles.recepiesContainer}>
        <Text style={styles.title}> {categoryName} </Text>

        <FlatList
          data={search.length>0 ?filteredRecepies :filteredRecepiesByCategory}
          style={styles.recepies}
          contentContainerStyle={styles.recepy}
          renderItem={({ item }) =>  {
            return <Text> {item.title} </Text>
          }}
          keyExtractor={(item)=> item.id.toString()}
          showsVerticalScrollIndicator={true}
        />


      {/* LISTA DE RECETAS */}
      {filteredRecepies.length === 0 && (
          <View style={styles.viewNotFound}>
            <Text style={styles.viewNotFoundText}>No se encontraron recetas...</Text>
            <Image style={styles.viewNotFoundImg} resizeMode='contain' source={noFoodIcon}/>
          </View>) 
      }

      </View>

    </View>
  )
}