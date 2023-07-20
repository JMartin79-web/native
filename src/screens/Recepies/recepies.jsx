import React, {useState} from 'react'
import { View, Text, Button, Pressable } from 'react-native'

// Estilos
import { styles } from './stylesRecepies'
import { color } from '../../themes/colors/themes.colors'

//iconos
import { FontAwesome } from '@expo/vector-icons'; 

// Components
import Search from '../../components/search/search'


export default function Recepies({
  onPress,
  category,
  categoryId
}) {

  const [search, setSearch] = useState("")
  const [borderBottomColor, setBorderBottomColor] = useState(color.darkGrey);


    // Funciones para manejar el input
    const onHandleSearch = () => {
      console.warn("Buscando");
      let text = search
      setSearch("")
    }
    const onHandleSearchDisable = () => {
      console.warn("No ingresaste nada");
    }
    const onHandleClose = () => {
      setSearch("")
    }


    // Manage text in the input
    const onHandlerChangeText = (text) => {setSearch(text);};
    // Manage on focus
    const onHandleFocus = () => {setBorderBottomColor(color.pink)};
    // Manage on blur
    const onHandlerBlur = () => {setBorderBottomColor(color.darkGrey)};


  return (
    <View style={styles.recepies} >
      <Pressable style={styles.btnBack} onPress={onPress}>
        <FontAwesome
        name="angle-left"
        size={35}
        color={color.darkGrey}/>
        <Text  style={styles.btnBackText}>Volver</Text>
      </Pressable>


      <Search
      value={search}
      onHandlerChangeText={onHandlerChangeText}
      borderBottomColor={borderBottomColor}

      autoCorrect={false}
      placeholder="Buscar"
      placeholderTextColor= {color.darkGrey}
      onHandleBlur={onHandlerBlur}
      onHandleFocus={onHandleFocus}
      onSearch={onHandleSearch}
      onSearchDisable={onHandleSearchDisable}
      onClose={onHandleClose}
      />
      
      <Text style={styles.title}>{category}</Text>
    </View>
  )
}