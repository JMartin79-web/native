import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import Home from "../../screens/Home/home";
import Recepies from "../../screens/Recepies/recepies";
import RecepiesDetail from "../../screens/RecepiesDetail/recepiesDetail";
const Stack = createNativeStackNavigator()


export default function HomeNavigation(){
    return(
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown:false,
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen
                name="home"
                component={Home}
            />
            
            <Stack.Screen
                name="recepies"
                component={Recepies}
            />
            
            <Stack.Screen
                name="recepies-detail"
                component={RecepiesDetail}
            />
        </Stack.Navigator>
    )
}