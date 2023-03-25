import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { authReducer } from "./Auth/auth.reducer";
import thunk from "redux-thunk";


const root_reducer = combineReducers({
  
  authManager: authReducer,
 
});

const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  root_reducer,
  composeInhancer(applyMiddleware(thunk))
);
