import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import featuredBannerReducer from './FeaturedBanner/reducer';

const rootReducer = combineReducers({
    featuredBanner: featuredBannerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer,composeWithDevTools());
