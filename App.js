import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Resultado from './screens/Resultado';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: 'DevQuiz - Início' }} />
        <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Respondendo...' }} />
        <Stack.Screen name="Resultado" component={Resultado} options={{ title: 'Placar Final' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}