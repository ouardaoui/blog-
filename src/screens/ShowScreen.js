import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';



const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state } = useContext(Context);
  const blog = state.find(blog => blog.id === id);
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("EditScreen", { id })}>
        <Feather style={styles.header} name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  });
  return (
    <View>
      <Text>{blog.title}</Text>
      <Text>{blog.content}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    marginRight: 20
  }
})
export default ShowScreen;