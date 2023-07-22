import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./navigationHome";

function RootNavigator(){
    return(
        <NavigationContainer>
            <HomeNavigation/>
        </NavigationContainer>
    )
}
export default RootNavigator