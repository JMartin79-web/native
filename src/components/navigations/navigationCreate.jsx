import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import Create from "../../screens/Create/Create";


const Stack = createNativeStackNavigator()


export default function CreateNavigation(){
    return(
        <Stack.Navigator
            initialRouteName="create"
            screenOptions={{
                headerShown:false,
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen
                name="create"
                component={Create}
            />

        </Stack.Navigator>
    )
}