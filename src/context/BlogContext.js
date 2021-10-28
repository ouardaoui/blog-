import blogReducer from "../reducer/blogReducer";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts")
    dispatch({ type: "GET_blogpost", payload: response.data });
  }
}

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content })

    // dispatch({ type: "ADD_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  }
};
const deleteBlogPost = (dispatch) => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "DELETE_blogpost", payload: id })
  }
};
const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "EDIT_blogpost", payload: { id, title, content } });
    callback();
  }

};
export const { Context, Provider } = createDataContext(blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  [])

