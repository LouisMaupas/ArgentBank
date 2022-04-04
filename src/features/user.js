import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state
 */
const initialStateValue = { 
    _id: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    createdAt: "",    
    updatedAt: "",
    // TODO _V
    _v: 0    
}

/**
 * Get an intial state, an object of reducer functions and a slcie name,
 * and automatically generates action creators (createAction) and action types that correspond to the reducers (createReducer) and state
 */
const userSlice = createSlice({
    name: "user",
    initialState: initialStateValue,
    reducers: {
        handleUserProfile: (state, action) => {
            const userData = action.payload;
            state._id = userData._id
            state.email = userData.email
            state.password = userData.password
            state.firstName = userData.firstName
            state.lastName = userData.lastName
            state.createdAt = userData.createdAt
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
