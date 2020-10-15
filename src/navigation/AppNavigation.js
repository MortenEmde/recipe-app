import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import IngredientsScreen from '../screens/Ingredients/IngredientsScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import { Text } from 'react-native';

const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}
      options={({ navigation }) => ({
        headerLeft: () => <Text
          onPress={() => {
            navigation.openDrawer();
          }
          }>Categories</Text>
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
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 230
      }}
      drawerContent = {props => <Text>Hello!</Text>}
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
