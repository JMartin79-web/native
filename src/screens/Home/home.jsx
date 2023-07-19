import React, {useState} from 'react'
import { View, Text, Image, FlatList } from 'react-native'

// Estilos
import { styles } from './stylesHome'
import { color } from '../../themes/colors/themes.colors'
//Components
import Search from '../../components/search/search'

// Assets
import logo from "../../../assets/img/logo/logo_color.png"
import Categories from '../../components/categories/categories'

import destacada from "../../../assets/img/Categories/destacado.jpg"
import dulce from "../../../assets/img/Categories/dulce.jpg"
import salado from "../../../assets/img/Categories/salado.jpg"
import agridulce from "../../../assets/img/Categories/agridulce.jpg"

// Data
import CATEGORIES from "../../components/data/categories.json"

export default  Home = ({
    onPress

}) => {

    const [search, setSearch] = useState("")
    const [borderBottomColor, setBorderBottomColor] = useState(color.darkGrey);

    // Funciones para manejar el input

    // Manage text in the input
    const onHandlerChangeText = (text) => {setSearch(text);};
    
    // Manage on focus
    const onHandleFocus = () => {
        setBorderBottomColor(color.pink)
    };
        
    // Manage on blur
    const onHandlerBlur = () => {
        setBorderBottomColor(color.darkGrey)
    };


  return (
    <View style={styles.home}>
        <Image style={styles.logo} source={logo} />
        <Search
            value={search}
            onHandlerChangeText={onHandlerChangeText}
            borderBottomColor={borderBottomColor}

            autoCorrect={false}
            placeholder="Buscar"
            placeholderTextColor= {color.darkGrey}
            onHandleBlur={onHandlerBlur}
            onHandleFocus={onHandleFocus}
        />

        <Text style={styles.title}>Categorías</Text>

        
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          style={styles.categoriesContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.category}
          renderItem={({ item }) =>  {
            return <Categories title={item.name} imagen={destacada}/>
        }}
        />

    </View>
  )
}

/*

renderItem={({ item }) =>
            return <Categories
            title={item.name}
            imagen={item.source}
            onPress={onPress}
            />


CATEGORIAS EN VIEW
<View style={styles.categoriesContainer}>
            <Categories title="Destacados " source={destacada} />
            <Categories title="Salado" source={salado} />
            <Categories title="Dulce" source={dulce} />
            <Categories title="Agridulce" source={agridulce} />
        </View>


        <FlatList
          data={CATEGORIES}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.category}
          renderItem={({ item }) => {
          <Categories title={item.name} source={item.backgroundImage} />}}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
*/