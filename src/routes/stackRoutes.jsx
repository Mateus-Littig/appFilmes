import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Search from '../pages/Search'
import SignIn from '../pages/SignIn'
import Form from '../pages/Form'
const Stack = createNativeStackNavigator()

function StackRoutes () {
  return (
  <Stack.Navigator initialRouteName='SignIn'>
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Form"
      component={Form}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Detail"
      component={Detail}
      options={{
        headerShown: false,
        title: 'Detalhes'
      }}
    />
    <Stack.Screen
      name="Search"
      component={Search}
      options={{
        title: 'Sua Busca',
        headerTintColor: '#FFF',

        headerTitleStyle: {
          color: '#FFF'
        },
        headerStyle: {
          backgroundColor: '#141A29'
        }
      }}
    />
  </Stack.Navigator>
  )
}
export default StackRoutes
