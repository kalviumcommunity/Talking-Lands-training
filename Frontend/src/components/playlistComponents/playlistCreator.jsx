import { useState, useContext } from "react";
import PlaylistModal from "./playlistModal";
import { PlaylistContext } from "../UseContext/PlaylistContext";
import PlaylistMain from "./PlaylistMain";

function PlaylistCreator() {
  const { isShowing, setIsShowing, isPlayListCreated, playListData } = useContext(PlaylistContext);
  const togglePlayListModal = () => {
    setIsShowing(!isShowing)
  }
  return (
    <>
    <div className="mx-10 mt-8">
      <div>
        <div className="flex items-center">
          <div className="h-14 w-14 bg-pink rounded-lg cursor-pointer" onClick={togglePlayListModal}>
            <svg className="svg-circleplus" viewBox="0 0 100 100">
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
            Create New Playlist
          </span>
        </div>
        <hr className="w-5/5 mt-9 rounded-sm" />
        <div className="flex relative">
        <PlaylistMain/> 
        <PlaylistModal/>
        </div>
       
      </div>
    </div>
   
    </>
  );
}

export default PlaylistCreator;
