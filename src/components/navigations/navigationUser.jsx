import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import User from "../../screens/User/User";

const Stack = createNativeStackNavigator()


export default function UserNavigation(){
    return(
        <Stack.Navigator
            initialRouteName="user"
            screenOptions={{
                headerShown:false,
                headerShadowVisible: false,
            }}
        >
            <Stack.Screen
                name="user"
                component={User}
            />

        </Stack.Navigator>
    )
}