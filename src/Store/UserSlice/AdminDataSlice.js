import { createSlice } from "@reduxjs/toolkit";


const initialState={
    adminData: []
};

export const adminDataSlice = createSlice({
    name:"AdminData",
    initialState,
    reducers:{
        //add data to the store and local storage
        addAdminData: (state, action) => {
            state.adminData=[...action.payload]
        },
        //remove data from storage (used in logout)
        removeAdminData: state => {
            state.adminData=[];
        }
    }
})


export const {addAdminData, removeAdminData} = adminDataSlice.actions;
export default adminDataSlice.reducer;