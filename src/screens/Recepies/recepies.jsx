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
import RecepyCard from '../../components/recepyCard/recepyCard';

// Data
import { useSelector } from 'react-redux';

export default function Recepies({
  navigation, route, 
}) {

  const RECEPIES = useSelector((state)=> state.recepies.data)


  const {categoryId,categoryName} = route.params

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


    // Manage NAVIGATION TO RECEPYDETAIL
    const onHandleCardPress = ({recepyId}) => {
      navigation.navigate("recepies-detail", {recepyId})
    }


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
      <Pressable style={styles.btnBack} onPress={()=>navigation.navigate("home")}>
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
            return<RecepyCard
                    title={item.title}  
                    //image={item.image}
                    description={item.description}
                    onCardPress={()=> onHandleCardPress({recepyId:item.id})}
                    tags={item.tags}
                  />
          }}
          keyExtractor={(item)=> item.id.toString()}
          showsVerticalScrollIndicator={false}
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