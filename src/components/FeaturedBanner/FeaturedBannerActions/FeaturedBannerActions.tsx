import React, { FunctionComponent } from 'react';
import Button from '@mui/material/Button';
import _ from 'lodash';
import { ShowToastHandler, TrailerIdHandler, VideoPlayerHandler } from '../../types';
import HTTP from '../../../utils/http';
import './FeaturedBannerActions.css';

interface FeaturedBannerActionsProps {
  movieId: string;
  setOpenVideoPlayer: VideoPlayerHandler;
  setShowToastHandler: ShowToastHandler;
  setTrailerIdHandler: TrailerIdHandler;
}

const FeaturedBannerActions: FunctionComponent<FeaturedBannerActionsProps> = ({ movieId, setOpenVideoPlayer, setShowToastHandler, setTrailerIdHandler }) => {
    const handleGetVideos = async () => {
      const { results } = (await HTTP.get(`/tv/${movieId}/videos`)).data;
      if (results.length === 0) {
        setShowToastHandler(true);

        return _.delay(() => setShowToastHandler(false), 3000);
      }

      setTrailerIdHandler(results[0].key);
      setOpenVideoPlayer();
    };

  return (
    <div className="c-featured-banner__buttons">
      <Button onClick={handleGetVideos} className="c-featured-banner__button" variant="contained" size="large">Play</Button>
      <Button className="c-featured-banner__button" variant="contained" size="large">Add To My List</Button>
    </div>
  );
};

export default FeaturedBannerActions;
