import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from './store'
import { BasketScreen, HomeScreen, RestaurantScreen } from './screens'

import 'react-native-url-polyfill/auto'

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />

            <Stack.Screen
            
              name="Basket"
              component={BasketScreen}
              options={{
                presentation: 'modal',
              }}
            />

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
