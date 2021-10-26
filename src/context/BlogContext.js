import blogReducer from "../reducer/blogReducer";
import createDataContext from "./createDataContext";

const addBlogPost = (dispatch) => {
  return () =>
    dispatch({ type: "ADD_blogpost" })
};
const deleteBlogPost = (dispatch) => {
  return (id) =>
    dispatch({ type: "DELETE_blogpost", payload: id })
};
export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [])

