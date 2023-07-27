import { React, useState} from "react";
import {useFonts} from "expo-font"
import {SafeAreaView, Text } from "react-native";
import { Provider } from "react-redux";

// STYLES
import { styles } from "./Styles";
import { color } from "./themes/themes";
import { FONTS } from "./themes/fonts/themes.fonts";

// NAVEGADOR
import RootNavigator from "./components/navigations/navigation";

// Paginas
import Home from "./screens/Home/home";
import Recepies from "./screens/Recepies/recepies";
import Loader from "./screens/Loader/loader";
import { store } from "./store/store";

export default function App(){
      
  const [loaded, error] = useFonts({
    [FONTS.thin]:  require("../assets/fonts/Livvic-Thin.ttf"),
    [FONTS.thinItalic]:require("../assets/fonts/Livvic-ThinItalic.ttf"),

    [FONTS.extralight]:require("../assets/fonts/Livvic-ExtraLight.ttf"),
    [FONTS.extralightItalic]:require("../assets/fonts/Livvic-ExtraLightItalic.ttf"),
    
    [FONTS.light]:require("../assets/fonts/Livvic-Light.ttf"),
    [FONTS.lightItalic]:require("../assets/fonts/Livvic-LightItalic.ttf"),

    [FONTS.medium]:require("../assets/fonts/Livvic-Medium.ttf"),
    [FONTS.mediumItalic]:require("../assets/fonts/Livvic-MediumItalic.ttf"),

    "livvic-regular":require("../assets/fonts/Livvic-Regular.ttf"),
    [FONTS.italic]:require("../assets/fonts/Livvic-Italic.ttf"),
    
    [FONTS.semibold]:require("../assets/fonts/Livvic-SemiBold.ttf"),
    [FONTS.semiboldItalic]:require("../assets/fonts/Livvic-SemiBoldItalic.ttf"),

    [FONTS.bold]:require("../assets/fonts/Livvic-Bold.ttf"),
    [FONTS.boldItalic]: require("../assets/fonts/Livvic-BoldItalic.ttf"),

    [FONTS.black]:require("../assets/fonts/Livvic-Black.ttf"),
    [FONTS.blackItalic]:require("../assets/fonts/Livvic-BlackItalic.ttf"),

  })

if(!loaded){ return(<Loader/>)}

return(
<>
  <Provider store={store}>
    <SafeAreaView style={styles.SafeArea}>
      <RootNavigator/>
    </SafeAreaView>
  </Provider>
    
</>
    )
}




/*

export default function App(){
   
  const [loaded, error] = useFonts({
    [FONTS.thin]:  require("../assets/fonts/Livvic-Thin.ttf"),
    [FONTS.thinItalic]:require("../assets/fonts/Livvic-ThinItalic.ttf"),

    [FONTS.extralight]:require("../assets/fonts/Livvic-ExtraLight.ttf"),
    [FONTS.extralightItalic]:require("../assets/fonts/Livvic-ExtraLightItalic.ttf"),
    
    [FONTS.light]:require("../assets/fonts/Livvic-Light.ttf"),
    [FONTS.lightItalic]:require("../assets/fonts/Livvic-LightItalic.ttf"),

    [FONTS.medium]:require("../assets/fonts/Livvic-Medium.ttf"),
    [FONTS.mediumItalic]:require("../assets/fonts/Livvic-MediumItalic.ttf"),

    "livvic-regular":require("../assets/fonts/Livvic-Regular.ttf"),
    [FONTS.italic]:require("../assets/fonts/Livvic-Italic.ttf"),
    
    [FONTS.semibold]:require("../assets/fonts/Livvic-SemiBold.ttf"),
    [FONTS.semiboldItalic]:require("../assets/fonts/Livvic-SemiBoldItalic.ttf"),

    [FONTS.bold]:require("../assets/fonts/Livvic-Bold.ttf"),
    [FONTS.boldItalic]: require("../assets/fonts/Livvic-BoldItalic.ttf"),

    [FONTS.black]:require("../assets/fonts/Livvic-Black.ttf"),
    [FONTS.blackItalic]:require("../assets/fonts/Livvic-BlackItalic.ttf"),

  })

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedCategoryName, setSelectedCategoryName] = useState(null)
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  //
  const onHandleSelectCategory = ({categoryId}) => {
    setSelectedCategory(categoryId);
    setIsCategorySelected(!isCategorySelected);
  };

  const onHandleSelectCategoryName = ({categoryName}) => {
    console.log(categoryName);
    setSelectedCategoryName(categoryName)
  }

  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(null);
  };

if(!loaded){ return(<Loader/>)}

return(
<>
    <SafeAreaView style={styles.SafeArea}>
    <Header></Header>
      {isCategorySelected ? (
            <Recepies
            onPress={onHandleNavigate}
            categoryId={selectedCategory}
            categoryName={selectedCategoryName} />
          ) : (
            <Home
            onSelectedCategory={onHandleSelectCategory}
            onSelectedCategoryName={onHandleSelectCategoryName} />
          )
      }

      

    </SafeAreaView>
    
</>
    )
}

*/