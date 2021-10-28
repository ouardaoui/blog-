import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import { NavigationContainer } from "@react-navigation/native";

const EditScreen = ({ route, navigation }) => {
  console.log(navigation)
  const { id } = route.params
  const { state, editBlogPost } = useContext(Context);
  const blog = state.find(blog => blog.id === id)
  return (
    <BlogPostForm
      initialValues={{ title: blog.title, content: blog.content }}
      onSubmit={(title, content) => { editBlogPost(id, title, content, () => navigation.pop()) }} />
  )
}
const styles = StyleSheet.create({})
export default EditScreen;