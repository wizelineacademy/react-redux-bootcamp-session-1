export type Movie = {
  id: string;
  media_type: string;
  poster_path: string;
  name: string;
  title: string;
  original_name: string;
  overview: string;
  vote_average: string;
  backdrop_path: string;
};

export type Category = {
  name: string;
  type?: string;
  movies: Movie[];
};

export type PromotedMovieHandler = (movie: Movie) => void;
export type ShowToastHandler = (show: boolean) => void;
export type TrailerIdHandler = (trailerId: string) => void;
export type VideoPlayerHandler = () => void;
export type CategoriesFetcherHandler = (categories: Category[]) => void;
