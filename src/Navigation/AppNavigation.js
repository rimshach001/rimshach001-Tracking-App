import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Page1welcome from '../Frontend/Page1welcome'
import Page10Welcome from '../Frontend/Page10Welcome'
import Page11map from '../Frontend/page11map'
import Page12BusRoutes from '../Frontend/Page12BusRoutes'
import Page12_16Bus from '../Frontend/Page12_16Bus'
import Page12_15Bus from '../Frontend/Page12_15Bus'
import Page12_8Bus from '../Frontend/Page12_8Bus'
import Page12_11Bus from '../Frontend/Page12_11Bus'
import Page12_10Bus from '../Frontend/Page12_10Bus'

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#D3D3D3'
  },
};
export default function AppNavigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {/* Get Started Page */}
        <Stack.Screen name="page1"
          options={{
            headerTintColor: 'white',
            title: 'SPEEDO',
            headerStyle: {
              backgroundColor: '#FF2511'
            },
            headerTitleStyle: {
              color: 'white'
            },
            headerTitleAlign: 'center'
          }}
          component={Page1welcome} />

        {/* Main Page */}
        <Stack.Screen name="page10"
          options={{
            headerTintColor: 'white',
            title: 'SPEEDO',
            headerStyle: { backgroundColor: '#FF2511' },
            headerTitleStyle: {
              color: 'white'
            },
            headerTitleAlign: 'center'
          }}
          component={Page10Welcome} />

        {/* Live Map*/}
        <Stack.Screen name="page11map"
          options={{
            headerTintColor:'white',
            title: 'Live Tracking',
            headerStyle: { backgroundColor: '#FF2511' },
            headerTitleStyle: {
              color: 'white'
            },
            headerTitleAlign: 'center',
            // headerShown: false
          }}
          component={Page11map} />

        {/* All Buses Routes */}
        <Stack.Screen name="page12"
          options={{
            headerTintColor: 'white',
            title: 'Bus Routes',
            headerStyle: { backgroundColor: '#FF2511' },
            headerTitleAlign: 'center'
          }}
          component={Page12BusRoutes} />
        {/* Bus 2 route */}
        <Stack.Screen name="page12_15Bus"
          options={{
            headerTintColor: 'white',
            title: 'Bus 15 Stops',
            headerStyle: { backgroundColor: '#FF2511' },
            headerTitleAlign: 'center'
          }}
          component={Page12_15Bus} />
        {/* Bus 8 route */}
        <Stack.Screen name="page12_8Bus"
          options={{
            headerTintColor: 'white',
            title: 'Bus 8 Stops',
            headerStyle: { backgroundColor: '#FF2511' },
            headerTitleAlign: 'center'
          }}
          component={Page12_8Bus} />
        {/* Bus 11 route */}
        <Stack.Screen name="page12_11Bus"
          options={{
            headerTintColor: 'white',
            title: 'Bus 11 Stops',
            headerStyle: { backgroundColor: '#FF2511' },
            headerTitleAlign: 'center'
          }}
          component={Page12_11Bus} />
        {/* Bus 10 route */}
        <Stack.Screen name="page12_10Bus"
          options={{
            headerTintColor: 'white',
            title: 'Bus 10 stops',
            headerStyle: { backgroundColor: '#FF2511' },
            headerTitleAlign: 'center'
          }}
          component={Page12_10Bus} />
        {/* Bus 16 route */}
        <Stack.Screen name="page12_16Bus"
          options={{
            headerTintColor: 'white',
            title: 'Bus 16 Stops',
            headerStyle: { backgroundColor: '#FF2511' },
            headerTitleAlign: 'center'
          }}
          component={Page12_16Bus} />



      </Stack.Navigator>
    </NavigationContainer>
  )
}
