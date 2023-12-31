import { Button, Text, View, Pressable, ImageBackground } from "react-native"




import { styles } from "./stylesCategories"
import { color } from "../../themes/colors/themes.colors.js"

// Components


// Iconos

import { FontAwesome } from '@expo/vector-icons'; 
const Categories = ({
    id,
    title,
    imagen,
    onSelectedCategory,
    category
}) => {
    const arrow = <FontAwesome name="angle-right" size={35} color={color.white} />
    return(
        <Pressable
            style={({pressed}) => [styles.category, pressed && styles.categoryPressed]}
            onPress={() => {onSelectedCategory({id, category})}}
        >
            <Text style={styles.title} >{title}</Text>
            <View style={styles.imgContainer} >
                <ImageBackground
                style={styles.img}
                source={imagen}
                resizeMode="cover">
                    <View style={styles.arrow}>{arrow}</View>
                </ImageBackground>
            </View>

        </Pressable>
    )
}

export default Categories