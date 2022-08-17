import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./UserSlice/UserDataSlice";
import postDataReducer from "./UserSlice/PostsDataSlice";
<<<<<<< HEAD
import AuthReducer from "./UserSlice/AuthSlice";

export const store= configureStore({
    reducer: {auth:AuthReducer,userData: userDataReducer, postData:postDataReducer}
=======
import adminDataReducer from "./UserSlice/AdminDataSlice";

export const store= configureStore({
    reducer: {userData: userDataReducer, postData:postDataReducer, adminData: adminDataReducer}
>>>>>>> 2f0480831c264a963e721a3ddbf7b3e0fd694be2
});