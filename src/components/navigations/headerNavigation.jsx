import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

//STYLES
import { styles } from './stylesHeaderNavigation';
import { color } from '../../themes/colors/themes.colors';
// ICONS
import { MaterialCommunityIcons } from '@expo/vector-icons';

// IMPORT SYACKS NAVIGATIONS
import HomeNavigation from './navigationHome';
import HeartNavigation from './navigationHeart';
import CreateNavigation from './navigationCreate';
import UserNavigation from './navigationUser';

// COMPONENTS
import { ButtonHeader } from '../Header/ButtonHeader';


const Tab = createBottomTabNavigator();

export default function HeaderNavigation() {

  const homeIcon =  <MaterialCommunityIcons name="home" size={30} color={color.white} />
  const heartIcon =  <MaterialCommunityIcons name="heart" size={30} color={color.white} />
  const createIcon =  <MaterialCommunityIcons name="playlist-edit" size={30} color={color.white} />
  const userIcon =  <MaterialCommunityIcons name="account" size={30} color={color.white} />

  return (
    <Tab.Navigator 
        initialRouteName='HomeTab'
        style={styles.container}
        screenOptions={{
            header: () => null,
            
            tabBarStyle:{...styles.container},
        }}
    >

      <Tab.Screen name="HomeTab" component={HomeNavigation}
        options={{
          tabBarLabel: ({focused}) => (
            focused? <Text style={styles.label}>Home</Text> : ""),
          tabBarIcon: ({focused})=> (
            <ButtonHeader icon={homeIcon} focus={focused}/>
            
          )}
        }
      />

      <Tab.Screen name="HeartTab" component={HeartNavigation}
      options={{
        tabBarLabel: ({focused}) => (
          focused? <Text style={styles.label}>Liked</Text> : ""),
        tabBarIcon: ({focused})=> (
          <ButtonHeader icon={heartIcon} focus={focused} />
        )}
      }
      />

      <Tab.Screen name="CreateTab" component={CreateNavigation}
      options={{
        tabBarLabel: ({focused}) => (
          focused? <Text style={styles.label}>Crear</Text> : ""),
        tabBarIcon: ({focused})=> (
          <ButtonHeader icon={createIcon} focus={focused} />
        )}
      }/>

      <Tab.Screen name="UserTab" component={UserNavigation} 
      options={{
        tabBarLabel: ({focused}) => (
          focused? <Text style={styles.label}>Usuario</Text> : ""),
        tabBarIcon: ({focused})=> (
          <ButtonHeader icon={userIcon} focus={focused} />
        )}
      }
      />

    </Tab.Navigator>
  );
}