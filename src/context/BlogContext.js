import React, { useReducer } from "react";
import blogReducer from "../reducer/blogReducer";

export const BlogContext = React.createContext();

const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);
  const addBlogPost = () => {
    dispatch({ type: "ADD_blogpost" })
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }} >
      {children}
    </BlogContext.Provider >
  )
}
export default BlogProvider;