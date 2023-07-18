import { Text, View } from 'react-native'
import React, { useState } from 'react'

// Estilos
import { styles } from './styles.header'

// Componentes
import { ButtonHeader } from './ButtonHeader'
import { color } from '../../themes/colors/themes.colors'

// Iconos
import { FontAwesome } from '@expo/vector-icons'; 

const Header = () => {

  const homeIcon =  <FontAwesome name="home" size={25} color={color.white} />
  const likeIcon =  <FontAwesome name="heart" size={25} color={color.white} />
  const listIcon =  <FontAwesome name="list" size={25} color={color.white} />
  const userIcon =  <FontAwesome name="user" size={25} color={color.white} />
  const home= "home"
  const liked= "liked"
  const recipe= "recipe"
  const user= "user"

  const [page, setPage] = useState(home)

  onHandlePage = (value) => {setPage(value)}

  return (
    <View style={styles.container}>
    
    <View style={styles.headerBackground}></View>
      
    <View style={styles.header}>
        
        <ButtonHeader
        page={page}
        content="home"
        icon= {homeIcon}
        onPress={()=> {onHandlePage(home)}}/>

        <ButtonHeader
        page={page}
        content="liked" 
        icon= {likeIcon}
        onPress={()=> {onHandlePage(liked)}}/>

        <ButtonHeader
        page={page}
        content="recipe"
        icon= {listIcon}
        onPress={()=> {onHandlePage(recipe)}}/>

        <ButtonHeader
        page={page}
        content="user"
        icon= {userIcon}
        onPress={()=> {onHandlePage(user)}}/>

     </View>


    </View>
  )

}

export default Header