import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from '../screens/Home'
import { Todo } from '../screens/Todo'

const stack = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Todo" component={Todo} />
      </stack.Navigator>
    </NavigationContainer>
  )
}