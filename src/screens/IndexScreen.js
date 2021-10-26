import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { BlogContext } from "../context/BlogContext";
const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index screen</Text>
      <Button title="add post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />

    </View>
  );
}

export default IndexScreen;