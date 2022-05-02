import { createSlice } from "@reduxjs/toolkit";
/**
 * Initial state
 */
const initialStateValue = { 
    createdAt: "",    
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    updatedAt: "",
    __v: 0    
}
/**
 * Get an intial state, an object of reducer functions and a slice name,
 * and automatically generates action creators (createAction) and action types that correspond to the reducers (createReducer) and state
 */
const userSlice = createSlice({
    name: "user",
    initialState: initialStateValue,
    reducers: {
        handleUserProfile: (state, action) => {
            const userData = action.payload;
            state.createdAt = userData.createdAt
            state.email = userData.email
            state.firstName = userData.firstName
            state.id = userData.id
            state.lastName = userData.lastName
            state.updatedAt = userData.updatedAt
        }
    },
});
// destructuring slice to recover the reducers and the actions
const {actions, reducer} = userSlice
// export each action individually
export const {handleUserProfile} = actions
// reducer is the default export, not the slice
export default reducer
