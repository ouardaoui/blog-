import React, { useContext } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { Context } from "../context/BlogContext";
const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>Index screen</Text>
      <Button title="add post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(state) => state.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />

    </View>
  );
}

export default IndexScreen;