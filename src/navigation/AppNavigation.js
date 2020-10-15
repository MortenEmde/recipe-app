import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles';
import HomeScreen from '../screens/Home/HomeScreen';
import DrawerContent from '../screens/Drawer/DrawerContent';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import IngredientsScreen from '../screens/Ingredients/IngredientsScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';

const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => 
          <TouchableHighlight onPress={() => {navigation.openDrawer()}}>
            <Image style={styles.menuImage} source={require('../../assets/images/menu.png')} />
          </TouchableHighlight>
        })}
      />
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='Ingredients' component={IngredientsScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition= 'left'
      initialRouteName= 'Main'
      drawerStyle={{
        width: 230
      }}
      drawerContent = {(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
}

export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
}
