import { Button, Text, View, Pressable, ImageBackground } from "react-native"

import { styles } from "./stylesCategories"
import { color } from "../../themes/colors/themes.colors.js"

const Categories = ({
    onPress,
    title,
    source
}) => {
    return(
        <Pressable
            style= {styles.category}
            onPress={onPress}
        >

            <Text style={styles.title} >{title}</Text>
            <View style={styles.imgContainer} >
                <ImageBackground style={styles.img} source={source} resizeMode="cover" >
                    
                </ImageBackground>
            </View>
        </Pressable>
    )
}

export default Categories