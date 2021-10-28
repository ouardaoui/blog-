import React from "react";
import uuid from 'react-native-uuid';
const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_blogpost":
      return ([...state, { title: action.payload.title, content: action.payload.content, id: uuid.v4() }])
    case "DELETE_blogpost":
      return state.filter(item => item.id !== action.payload)
    default:
      return state;
  }
}
export default blogReducer;