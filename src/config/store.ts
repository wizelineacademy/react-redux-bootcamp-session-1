import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer,composeWithDevTools());
