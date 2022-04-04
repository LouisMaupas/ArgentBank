import { configureStore } from '@reduxjs/toolkit';
import authentificationReducer from '../features/auth'
import userReducer from '../features/user'

/**
 * Encapsulates store creation logic and automatically connects to Devtools
 * @param object with a reducer property which automatically uses combineReducer
 */
 export const store = configureStore({
  reducer: {
    authentification: authentificationReducer,
    user: userReducer
 },
});


// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
