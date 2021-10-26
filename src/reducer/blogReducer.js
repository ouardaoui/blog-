import React from "react";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_blogpost":
      return ([...state, { title: `blog post #${state.length + 1}` }])
    default:
      return state;
  }
}
export default blogReducer;