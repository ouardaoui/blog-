import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from "../screens/IndexScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="IndexScreen"
    >
      <Stack.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={{
          title: 'blogs',

        }}
      />
    </Stack.Navigator>
  );
}
export default MyStack;