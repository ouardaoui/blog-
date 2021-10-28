import blogReducer from "../reducer/blogReducer";
import createDataContext from "./createDataContext";

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_blogpost", payload: { title, content } });
    callback();
  }
};
const deleteBlogPost = (dispatch) => {
  return (id) =>
    dispatch({ type: "DELETE_blogpost", payload: id })
};
export const { Context, Provider } = createDataContext(blogReducer,
  { addBlogPost, deleteBlogPost },
  [{ title: "TEST_TITLE", content: "TEST_CONTENT", id: 1 }])

