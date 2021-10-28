import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)
  return (
    <View>
      <Text style={styles.label}>Enter title :</Text>
      <TextInput value={title} style={styles.input} onChangeText={(title) => setTitle(title)} />
      <Text style={styles.label}>Enter Content :</Text>
      <TextInput value={content} style={styles.input} onChangeText={(content) => setContent(content)} />
      <Button title="save blog post" onPress={() => { onSubmit(title, content) }} />
    </View>
  )
}
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
};
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

export default BlogPostForm;