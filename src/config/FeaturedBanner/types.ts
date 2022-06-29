import { Movie } from "components/types";

export const FETCH_FEATURED_BANNER = 'FETCH_FEATURED_BANNER';
export const FETCH_SECONDARY_FEATURED_BANNER = 'FETCH_SECONDARY_FEATURED_BANNER';

export type FeaturedBanner = {
  movie: Movie | undefined;
  secondaryMovie: Movie | undefined;
};

export interface FetchFeaturedBanner {
  type: typeof FETCH_FEATURED_BANNER,
  payload: Movie,
}

export type FetchSecondaryFeaturedBanner = {
  type: typeof FETCH_SECONDARY_FEATURED_BANNER,
  payload: Movie,
}

export type FetchFeaturedBannerTypes =
 | FetchFeaturedBanner
 | FetchSecondaryFeaturedBanner;
