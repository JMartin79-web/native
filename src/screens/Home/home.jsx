import React, {useState} from 'react'
import { View, Text, Image, FlatList } from 'react-native'

// Estilos
import { styles } from './stylesHome'
import { color } from '../../themes/colors/themes.colors'

//Components
import Search from '../../components/search/search'
import Categories from '../../components/categories/categories'

// Data
import CATEGORIES from "../../components/data/categories"

// Assets
import logo from "../../../assets/img/logo/logo_color.png"

export default  Home = ({
  onSelectedCategory, onSelectedCategoryName
}) => {

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
            onSearch={onHandleSearch}
            onSearchDisable={onHandleSearchDisable}
            onClose={onHandleClose}
        />

        <Text style={styles.title}>Categorías</Text>

        <FlatList
          data={CATEGORIES}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.category}
          renderItem={({ item }) =>  {
            return<Categories
                    title={item.name}
                    imagen={item.source}
                    onSelectedCategory={() =>onSelectedCategory({categoryId: item.id})}
                    onSelectedCategoryName={() =>onSelectedCategoryName({categoryName: item.category})}
                  />
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}

        />
    </View>
  )
}
