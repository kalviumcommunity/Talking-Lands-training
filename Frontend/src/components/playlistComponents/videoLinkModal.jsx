import { useContext, useEffect, useState } from "react";
import { motion} from "framer-motion";
import { PlaylistContext } from "../UseContext/PlaylistContext";

function VideoLinkModal() {
  const { isVideoLinkModalOpen, setisVideoLinkModalOpen ,setVideoLink, videoLink, videoLinkAdded,setvideoLinkAdded,videoId, playListStack}  = useContext(
    PlaylistContext
  );
  

  const closeVideoModal = () => {
    setisVideoLinkModalOpen(!isVideoLinkModalOpen);
  };

  const addVideoToPlayList = () => {
    setvideoLinkAdded(videoLink)
  }
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  useEffect(() => console.log(playListStack), [videoId])

  return (
    <>
      {isVideoLinkModalOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring", stiffness: 100,
            // ease: [0, 0.71, 0.2, 1.01]
          }}
          variants={modalVariants}
          className="h-48 w-150 bg-grayblack drop-shadow-2xl z-40 border-graywhite rounded-lg absolute top-1 right-80 grid grid-rows-modal"
        >
          <div
            className="flex items-center justify-end  cursor-pointer"
            onClick={closeVideoModal}
          >
            <svg
              height="16"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative top-4 right-4"
            >
              <path
                d="M56 5.64L50.36 0L28 22.36L5.64 0L0 5.64L22.36 28L0 50.36L5.64 56L28 33.64L50.36 56L56 50.36L33.64 28L56 5.64Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Add the link of your video"
              className="h-[48px] pl-4 bg-primary border-y-graywhite border-y border-l	border-l-graywhite w-[480px] outline-none caret-custom text-white"
              onChange={(e) => setVideoLink(e.target.value)}
            />
            <button className="h-[48px] w-[72px] bg-graywhite text-md text-black font-bold rounded-r-sm" onClick={addVideoToPlayList}>
              Add
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default VideoLinkModal;
