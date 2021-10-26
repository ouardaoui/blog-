import React, { useContext } from "react";
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';
const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="add post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(state) => state.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>

            </View>
          )
        }}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
})

export default IndexScreen;