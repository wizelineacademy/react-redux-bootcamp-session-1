import React, { FunctionComponent } from 'react';
import YouTube from 'react-youtube';
import './VideoPlayer.css';

interface VideoPlayerProps {
  videoId: string;
  onEndHandler: () => void;
}

const VideoPlayer: FunctionComponent<VideoPlayerProps> = ({ videoId, onEndHandler}) => {
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1
    }
  };

  return <YouTube className="video-player" videoId={videoId} opts={opts} onEnd={onEndHandler} />
};

export default VideoPlayer;
