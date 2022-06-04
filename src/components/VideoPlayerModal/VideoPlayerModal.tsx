import React, { FunctionComponent } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import VideoPlayer from '../VideoPlayer';
import { VideoPlayerHandler } from '../types';

interface VideoPlayerModalProps {
    handleCloseModal: VideoPlayerHandler;
    isModalOpen: boolean;
    trailerId: string;
}

const VideoPlayerModal: FunctionComponent<VideoPlayerModalProps> = ({ handleCloseModal, isModalOpen, trailerId }) => {
    const boxStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '6px solid #000',
        boxShadow: 24,
        width: '100%',
        maxWidth: '600px',
        '&::after': {
            content: '""',
            display: 'block',
            paddingBottom: '56.25%'
        }
    };

    return (
        <Modal open={isModalOpen} onBackdropClick={handleCloseModal}>
            <Box sx={boxStyles}>
                <VideoPlayer videoId={trailerId} onEndHandler={handleCloseModal} />
            </Box>
        </Modal>
    );
};

export default VideoPlayerModal;
