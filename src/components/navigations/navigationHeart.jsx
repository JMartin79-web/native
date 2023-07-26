import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import Heart from "../../screens/Heart/Heart";
import Recepies from "../../screens/Recepies/recepies";
import RecepiesDetail from "../../screens/RecepiesDetail/recepiesDetail";
const Stack = createNativeStackNavigator()


export default function HeartNavigation(){
    return(
        <Stack.Navigator
            initialRouteName="heart"
            screenOptions={{
                headerShown:false,
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen
                name="heart"
                component={Heart}
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