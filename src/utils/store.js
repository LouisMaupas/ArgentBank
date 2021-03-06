import { configureStore } from '@reduxjs/toolkit';
import authentificationReducer from '../features/slices/auth'
import userReducer from '../features/slices/user'

/**
 * Encapsulates store creation logic
 * @param object with a reducer property which automatically uses combineReducer
 */
 export const store = configureStore({
  reducer: {
    authentification: authentificationReducer,
    user: userReducer,
 },
});


// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
