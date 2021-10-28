import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';



const ShowScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("EditScreen", { id: id })} >
        <Feather name="edit" size={24} color="black" />
      </TouchableOpacity >
    ),
  })
  const { id } = route.params;
  const { state } = useContext(Context);
  const blog = state.find(blog => blog.id === id)
  return (
    <View>
      <Text>{blog.title}</Text>
      <Text>{blog.content}</Text>
    </View>
  )
}

export default ShowScreen;