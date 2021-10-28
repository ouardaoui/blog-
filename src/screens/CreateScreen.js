import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const { addBlogPost } = useContext(Context)

  return (
    <View>
      <Text style={styles.label}>Enter title :</Text>
      <TextInput style={styles.input} onChangeText={(title) => setTitle(title)} />
      <Text style={styles.label}>Enter Content :</Text>
      <TextInput style={styles.input} onChangeText={(content) => setContent(content)} />
      <Button title="add blogpost" onPress={() => { addBlogPost(title, content, () => { navigation.navigate("IndexScreen") }) }} />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: "black",
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 5,
  }
})
export default CreateScreen;