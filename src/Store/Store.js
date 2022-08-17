import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./UserSlice/UserDataSlice";
import postDataReducer from "./UserSlice/PostsDataSlice";

export const store= configureStore({
    reducer: {userData: userDataReducer, postData:postDataReducer}
});