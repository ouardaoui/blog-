import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ route }) => {
  const { id } = route.params
  const { state } = useContext(Context);
  const blog = state.find(blog => blog.id === id)
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  return (
    <View>
      <Text>{blog.title}</Text>
      <TextInput />

    </View>
  )
}
export default EditScreen;