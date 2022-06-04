import React, { FunctionComponent, useState } from 'react';
import Categories from './components/Categories';
import FeaturedBanner from './components/FeaturedBanner/FeaturedBanner';
import NavBar from './components/NavBar/NavBar';
import Toast from './components/Toast';
import VideoPlayerModal from './components/VideoPlayerModal';
import PromotedMovieFetcher from './components/PromotedMovieFetcher';
import CategoriesFetcher from './components/CategoriesFetcher';
import {
  CategoriesFetcherHandler,
  Category,
  Movie,
  PromotedMovieHandler,
  ShowToastHandler,
  TrailerIdHandler,
  VideoPlayerHandler
} from './components/types';
import './App.css';

const App: FunctionComponent = () => {
  const [bannerMovie, setBannerMovie] = useState<Movie | undefined>(undefined);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [trailerId, setTrailerId] = useState<string>('');
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  const handleOpenToastHandler: ShowToastHandler = (show) => {
    setShowToast(show);
  };

  const handleOpenVideoPlayer: VideoPlayerHandler = () => {
    setIsVideoOpen(true);
  };

  const handleCloseModal: VideoPlayerHandler = () => {
    setIsVideoOpen(false);
  };

  const handleTrailerId: TrailerIdHandler = (trailerId) => {
    setTrailerId(trailerId);
  };

  const handlePromotedMovie: PromotedMovieHandler = (movie) => {
    setBannerMovie(movie);
  };

  const handleCategories: CategoriesFetcherHandler = (categories) => {
    setCategories(categories)
  };

  return (
    <div className="App">
      <NavBar />
      <PromotedMovieFetcher handlePromotedMovie={handlePromotedMovie} />
      <FeaturedBanner
        movie={bannerMovie}
        setShowToastHandler={handleOpenToastHandler}
        setOpenVideoPlayer={handleOpenVideoPlayer}
        setTrailerIdHandler={handleTrailerId}
      />
      <CategoriesFetcher handleFetchedCategories={handleCategories} />
      <Categories categories={categories} setShowToastHandler={handleOpenToastHandler} />
      <Toast isOpen={showToast} severity="error" title="Error" message="Sorry, there is no trailer available for this tv/movie!" />
      <VideoPlayerModal handleCloseModal={handleCloseModal} isModalOpen={isVideoOpen} trailerId={trailerId} />
    </div>
  );
}

export default App;
