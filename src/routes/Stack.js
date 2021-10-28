import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from "../screens/IndexScreen";
import ShowScreen from "../screens/ShowScreen";
import CreateScreen from "../screens/CreateScreen"
import EditScreen from "../screens/EditScreen";

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
          title: 'blogs list',
        }}
      />
      <Stack.Screen
        name="ShowScreen"
        component={ShowScreen}
        options={{
          title: 'blog',
        }}
      />
      <Stack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          title: 'Create',
        }}
      />
      <Stack.Screen
        name="EditScreen"
        component={EditScreen}
        options={{
          title: 'Edit',
        }}
      />
    </Stack.Navigator>
  );
}
export default MyStack;