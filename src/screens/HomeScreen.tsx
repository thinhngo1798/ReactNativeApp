import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import GirlScreen from './GirlScreen'
import BoyScreen from './BoyScreen'

const Tab = createBottomTabNavigator()

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="User 1"
        options={{ tabBarIcon: () => <Text>🐶</Text> }}
        component={GirlScreen}
      />
      <Tab.Screen
        name="User 2"
        options={{ tabBarIcon: () => <Text>🐱</Text> }}
        component={BoyScreen}
      />
  </Tab.Navigator>
  )
}

export default HomeScreen
