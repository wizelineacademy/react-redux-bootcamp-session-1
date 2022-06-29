import { Movie } from "components/types";
import { FetchFeaturedBanner, FetchSecondaryFeaturedBanner, FETCH_FEATURED_BANNER, FETCH_SECONDARY_FEATURED_BANNER } from "./types";

export const fetchFeaturedBanner = (movie: Movie): FetchFeaturedBanner =>  {
    return {
      type: FETCH_FEATURED_BANNER,
      payload: movie,
    }
}

export const fetchSecondaryMovie = (movie: Movie): FetchSecondaryFeaturedBanner => {
    return {
        type: FETCH_SECONDARY_FEATURED_BANNER,
        payload: movie,
    }
}
