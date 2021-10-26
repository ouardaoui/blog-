import blogReducer from "../reducer/blogReducer";
import createDataContext from "./createDataContext";

const addBlogPost = (dispatch) => {
  return () =>
    dispatch({ type: "ADD_blogpost" })
};
export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, [])

