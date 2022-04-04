import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { isAuthentified: false, token: ""}

/**
 * Get an intial state, an object of reducer functions and a slcie name,
 * and automatically generates actio creators (createAction) and action types that correspond to the reducers (createReducer) and state
 */
const authentificationSlice = createSlice({
    name: "authentification ",
    initialState: initialStateValue,
    // List of reducers: each one defines the action to do / the change of state expected by actions
    // also defined creator actions
    reducers: {
      /**
       * 
       * @param {*} state 
       * @param {*} action 
       */
        userLogin: (state, action) => {
            state.isAuthentified = true
            state.token = action.payload
        },
        userLogout: (state) => {
            state.isAuthentified = false
            state.token = ""
        }
    },
});

// destructuring slice to recover the reducers and the actions
const {actions, reducer} = authentificationSlice
// export each action individually
export const {userLogin, userLogout} = actions
// reducer is the default export, not the slice
export default reducer
// export const logout 
