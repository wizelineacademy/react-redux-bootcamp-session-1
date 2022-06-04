import React, { FunctionComponent, useState } from 'react';
import _ from 'lodash';
import VideoPlayer from '../VideoPlayer';
import { Movie, ShowToastHandler } from '../types';
import HTTP from '../../utils/http';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
  setShowToastHandler: ShowToastHandler;
  type: string;
}

const MovieCard: FunctionComponent<MovieCardProps> = ({ movie, setShowToastHandler, type }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [trailerId, setTrailerId] = useState('');

  const handleGetVideos = async () => {
    const { results } = (await HTTP.get(`/${movie.media_type || type}/${movie.id}/videos`)).data;
    if (results.length === 0) {
      setShowToastHandler(true);

      return _.delay(() => setShowToastHandler(false), 3000);
    }
    setIsExpanded(!isExpanded);
    setTrailerId(results[0].key);
  }

  const collapseTrailer = () => {
    setIsExpanded(false);
  };

  const movieCardStyles= {
    backgroundImage: `url('https://image.tmdb.org/t/p/w342${movie.poster_path}')`
  };

  const movieCardClasses = `c-movie-card ${isExpanded ? 'c-movie-card--expanded' : ''}`;

  return (
    <div onClick={handleGetVideos} className={movieCardClasses}>
      <div className="c-movie-card__poster" style={movieCardStyles}></div>
      {isExpanded && <VideoPlayer videoId={trailerId} onEndHandler={collapseTrailer} />}
    </div>
  );
};

export default MovieCard;
