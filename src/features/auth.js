import { createSlice } from '@reduxjs/toolkit'


/**
 * Get an intial state, an object of reducer functions and a slcie name,
 * and automatically generates actio creators (createAction) and action types that correspond to the reducers (createReducer) and state
 */
const toggleSlice = createSlice({
  name: 'toggleThing',
  initialState: false,
  // List of reducers: each one defines the action to do / the change of state expected by actions
  // also defined creator actions
  reducers: {
      /**
       * Toggle
       * @param {*} draft 
       * @param {*} action 
       */
    toggle: (state) => {
      return state === 'false' ? 'true' : 'false';
    },
  },
})

// destructuring slice to recover the reducers and the actions
const {actions, reducer} = toggleSlice
// export each action individually
export const {toggle, reset} = actions
// reducer is the default export, not the slice
export default reducer
