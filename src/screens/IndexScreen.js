import React, { useContext } from "react";
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';
const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
        <Feather style={styles.header} name="plus" size={24} color="black" />
      </TouchableOpacity>
    ),
  });
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(state) => state.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ShowScreen", { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
  },
  header: {
    marginRight: 20
  }
})

export default IndexScreen;