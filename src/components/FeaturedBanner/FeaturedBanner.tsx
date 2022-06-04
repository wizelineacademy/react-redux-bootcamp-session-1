import React, { FunctionComponent } from 'react';
import { Movie, ShowToastHandler, TrailerIdHandler, VideoPlayerHandler } from '../types';
import FeaturedBannerActions from './FeaturedBannerActions';
import './FeaturedBanner.css';

interface FeaturedBannerProps {
  movie: Movie | undefined;
  setOpenVideoPlayer: VideoPlayerHandler;
  setShowToastHandler: ShowToastHandler;
  setTrailerIdHandler: TrailerIdHandler;
}

const FeaturedBanner: FunctionComponent<FeaturedBannerProps> = ({ movie, setOpenVideoPlayer, setShowToastHandler, setTrailerIdHandler }) => {
  return (
    <>
      {movie && (
        <div className="c-featured-banner" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` }}>
          <div className="c-featured-banner__content">
            <h1 className="c-featured-banner__title">{movie.name || movie.title || movie.original_name}</h1>
            <FeaturedBannerActions movieId={movie.id} setOpenVideoPlayer={setOpenVideoPlayer} setShowToastHandler={setShowToastHandler} setTrailerIdHandler={setTrailerIdHandler} />
            <p className="c-featured-banner__overview">{movie.overview}</p>
            <p className="c-featured-banner__rating">Rating: {movie.vote_average}/10</p>
          </div>
        </div>
      )}
    </>
  );
}

export default FeaturedBanner;
