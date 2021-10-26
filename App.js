import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/routes/Stack';
import BlogProvider from "./src/context/BlogContext"

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </BlogProvider>
  )
}