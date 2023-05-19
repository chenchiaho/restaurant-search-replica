import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

type RootStackParamList = {
  Home: undefined
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
