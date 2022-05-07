import { createSlice } from "@reduxjs/toolkit";

// 
const initialState = { isAuthentified: false, token: ""}
/**
 * Get an intial state, an object of reducer functions and a slcie name,
 * and automatically generates action creators (createAction) and action types that correspond to the reducers (createReducer) and state
 */
const authentificationSlice = createSlice({
    name: "authentification ",
    initialState: initialState,
    // List of reducers: each one defines the action to do / the change of state expected by actions
    // also defined creator actions
    reducers: {
      /**
       * Update state with login informations
       * @param {*} state 
       * @param {*} action 
       */
        userLogin: (state, action) => {
            state.isAuthentified = true
            state.token = action
        },
        /**
         * Clear state of login informations
         * @param {*} state 
         */
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
