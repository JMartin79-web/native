import { NavigationContainer } from "@react-navigation/native";

import HeaderNavigation from "./headerNavigation";

// STYLES
import { styles } from "./stylesNavigation";

function RootNavigator(){
    return(
        <NavigationContainer
        styles={styles.container}

        >
            <HeaderNavigation/>
        </NavigationContainer>
    )
}
export default RootNavigator