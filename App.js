import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import LoginForm from './LoginForm';
import Register from './Register';
import Reset from './Reset';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={LoginForm} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Reset" component={Reset} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default App;