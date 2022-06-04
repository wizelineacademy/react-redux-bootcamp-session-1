import React, { FunctionComponent } from 'react';
import MovieCard from '../MovieCard';
import { Movie, ShowToastHandler } from '../types';
import './MovieRow.css';


interface MovieRowProps {
  category: string;
  movies: Movie[];
  setShowToastHandler: ShowToastHandler;
  type?: string;
}

const MovieRow: FunctionComponent<MovieRowProps> = ({ category, movies, setShowToastHandler, type }) => {
  return (
    <div className="c-movie-row">
      <h2 className="c-movie-row__title">{category}</h2>
      <div className="c-movie-row__container">
        {movies && movies.map((movie) => {
          return <MovieCard setShowToastHandler={setShowToastHandler} key={movie.id} type={type || ''} movie={movie} />
        })}
      </div>
    </div>
  );
}

export default MovieRow;
