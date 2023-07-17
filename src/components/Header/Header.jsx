import { Text, View } from 'react-native'
import React, { useState } from 'react'

// Estilos
import { styles } from './styles.header'

// Componentes
import { ButtonHeader } from './ButtonHeader'


const Header = () => {

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
        
        <ButtonHeader page={page} content="home" onPress={()=> {onHandlePage(home)}}/>
        <ButtonHeader page={page} content="liked" onPress={()=> {onHandlePage(liked)}}/>
        <ButtonHeader page={page} content="recipe" onPress={()=> {onHandlePage(recipe)}}/>
        <ButtonHeader page={page} content="user" onPress={()=> {onHandlePage(user)}}/>

     </View>


    </View>
  )

}

export default Header