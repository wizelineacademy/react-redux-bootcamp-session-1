import { FunctionComponent, useEffect } from 'react';
import _ from 'lodash';
import HTTP from 'src/utils/http';
import movieRoutes from 'src/utils/movieRoutes';
import { PromotedMovieHandler } from '../types';

interface PromotedMovieFetcherProps {
  handlePromotedMovie: PromotedMovieHandler;
}

const PromotedMovieFetcher: FunctionComponent<PromotedMovieFetcherProps> = ({ handlePromotedMovie }) => {
    useEffect(() => {
      async function fetchData () {
        const { results: movies } = (await HTTP.get(movieRoutes.fetchNetflixOriginals.url)).data;
        const randomMovie = movies[_.random(0, movies.length - 1)];
        handlePromotedMovie(randomMovie);
      }
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return null;
};

export default PromotedMovieFetcher;
