import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/routes/Stack';
import { Provider } from "./src/context/BlogContext"

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  )
}