import React, {useState} from 'react'
import { View, Text, Image } from 'react-native'

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

export default function Home() {

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

        <View style={styles.categoriesContainer}>
            <Categories title="Destacados semanal" source={destacada} />
            <Categories title="Salado" source={salado} />
            <Categories title="Dulce" source={dulce} />
            <Categories title="Agridulce" source={agridulce} />
        </View>

    </View>
  )
}