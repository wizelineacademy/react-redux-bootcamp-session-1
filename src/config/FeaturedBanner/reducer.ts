import { FeaturedBanner, FetchFeaturedBannerTypes, FETCH_FEATURED_BANNER, FETCH_SECONDARY_FEATURED_BANNER } from "./types";

const initialState: FeaturedBanner = {
  movie: undefined,
  secondaryMovie: undefined,
}

const featuredBannerReducer = (state = initialState, action: FetchFeaturedBannerTypes) => {
  switch(action.type) {
    case FETCH_FEATURED_BANNER: {
       return {
        ...state,
        movie: action.payload,
       }
    }
    case FETCH_SECONDARY_FEATURED_BANNER: {
        return {
          ...state,
          secondaryMovie: action.payload,
        }
    }
    default:
      return state;
  }
};

export default featuredBannerReducer;
