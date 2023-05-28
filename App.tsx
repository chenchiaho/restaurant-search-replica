import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen'

type RootStackParamList = {
  Home: undefined
  Restaurant: { id: string }
};

const Stack = createStackNavigator<RootStackParamList>()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Restaurant Search' }}
        />
        <Stack.Screen
          name='Restaurant'
          component={RestaurantScreen}
          options={({ route }) => ({ title: route.params.id })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
