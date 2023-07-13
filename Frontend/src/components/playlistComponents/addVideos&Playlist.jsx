import React, { useContext } from 'react';
import VideoMetaforPlaylist from './videoMetaforPlaylist';
import VideoLinkModal from './videoLinkModal';
import { PlaylistContext } from '../UseContext/PlaylistContext';

function AddVideosPlaylist() {
    const {isVideoLinkModalOpen, setisVideoLinkModalOpen} = useContext(PlaylistContext)

    const handleVideoLinkModal = () => {
        setisVideoLinkModalOpen(!isVideoLinkModalOpen)
    }

  return (
    <div>
      <div className="flex mb-4">
        <div className="h-8 w-8 bg-pink rounded-lg cursor-pointer" onClick={handleVideoLinkModal}>
          <svg className="svg-circleplus" viewBox="0 0 100 100" >
            <line
              x1="20"
              y1="50"
              x2="80"
              y2="50"
              strokeWidth="5"
              stroke="white"
            ></line>
            <line
              x1="50"
              y1="25"
              x2="50"
              y2="75"
              strokeWidth="5"
              stroke="white"
            ></line>
          </svg>
        </div>
        <span className="text-2xl font-medium ml-6 text-white">
         Add new videos
        </span>
      </div>
      <div className='relative'>
             <VideoMetaforPlaylist/>
              <VideoLinkModal/>
          </div>
    </div>
  );
}

export default AddVideosPlaylist;
