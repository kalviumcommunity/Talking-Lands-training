import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { PlaylistContext } from "../UseContext/PlaylistContext";
import GetTimeStamp from "./getTimeStamp";

function VideoMetaforPlaylist() {
  const [updatedPlaylist, setupdatedPlaylist] = useState('')
  const {
    videoLinkAdded,
    playListData,
    setplayListData,
    playListId,
    playListStack
  } = useContext(PlaylistContext);

  const Api_key = "AIzaSyCLQGxPXu7sr-mFVgoHHQKU8EcduZHbeFM";
  const url = videoLinkAdded;
  const videoId = url.split("v=")[1];

  const prevVideoIdRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false); // Add loading state

  // ...
  
  useEffect(() => {
    if (videoId && prevVideoIdRef.current !== videoId) {
      setIsLoading(true); // Start loading
  
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${Api_key}`
        )
        .then((res) => {
          const newVideo = {
            link: videoLinkAdded,
            title: res.data.items[0].snippet.title,
            thumbnail: res.data.items[0].snippet.thumbnails.default.url,
            duration: res.data.items[0].contentDetails.duration,
          };
  
          setplayListData((prev) => ({
            ...prev,
            videos: prev.videos
              ? [
                  ...prev.videos,
                  {
                    id: prev.videos.length,
                    videoMetaData: { ...newVideo },
                  },
                ]
              : [
                  {
                    id: 0,
                    videoMetaData: { ...newVideo },
                  },
                ],
          }));
  
          setIsLoading(false); // Stop loading
          console.log(videoId)
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false); // Stop loading on error
        });
  
      prevVideoIdRef.current = videoId;
    }
  }, [videoId]);
  return (
    // <div>
    //   {videoId && (
    //     <div
    //       className="border w-80 h-20 rounded-lg pr-4 flex items-center"
    //       key={playListData.videos[playListId].id}
    //     >
    //       <img
    //         // src={playListData.videos[playListId].videoMetaData.thumbnail}
    //         alt="video-image"
    //         className="h-19 rounded-lg"
    //       />
    //       {playListData.videos[playListId].videoMetaData.duration ? (
    //         <GetTimeStamp time={item.duration} />
    //       ) : null}
    //       <div className="h-4/5">
    //         <span
    //           className="text-white font-medium text-[16px]"
    //           title={item.title}
    //         >
    //           {playListData.videos[playListId].videoMetaData.title.length > 24
    //             ? `${playListData.videos[playListId].videoMetaData.title.slice(
    //                 0,
    //                 15
    //               )}...`
    //             : playListData.videos[playListId].videoMetaData.title}
    //         </span>
    //       </div>

    //       <svg
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="cursor-pointer"
    //       >
    //         <svg
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="cursor-pointer"
    //         >
    //           <g id="Trash">
    //             <path
    //               id="Rectangle 83"
    //               d="M5 6H19L18.1245 19.133C18.0544 20.1836 17.1818 21 16.1289 21H7.87111C6.81818 21 5.94558 20.1836 5.87554 19.133L5 6Z"
    //               stroke="white"
    //               stroke-width="2"
    //             />
    //             <path
    //               id="Vector 171"
    //               d="M9 6V3H15V6"
    //               stroke="white"
    //               stroke-width="2"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               id="Vector 170"
    //               d="M3 6H21"
    //               stroke="white"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //             />
    //             <path
    //               id="Vector 200"
    //               d="M10 10V17"
    //               stroke="white"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //             />
    //             <path
    //               id="Vector 201"
    //               d="M14 10V17"
    //               stroke="white"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //             />
    //           </g>
    //         </svg>
    //       </svg>
    //     </div>
    //   )}
    // </div>
    <div>
  {/* {videoId && playListData.videos.map((item) => (
    <div key={item.id}>
      <img src={item.videoMetaData.thumbnail} alt="" />
      <span className="text-white font-medium text-[16px]" title={item.videoMetaData.title}>
        {item.videoMetaData.title.length > 24
          ? `${item.videoMetaData.title.slice(0, 15)}...`
          : item.videoMetaData.title}
      </span>
    </div>
  ))} */}
  {/* {videoId && playListData.videos && playListData.videos.map((index, item) => {
  <div>
    <p key={item.id}>{item.videoMetaData.title}</p>
  </div>
})} */}
{/* {videoId && playListData.videos && playListData.videos.map((index, item) => {
  <div>
    <p key={item.id}>{item.videoMetaData.title}</p>
  </div>
})} */}
<div>
    {videoId && playListData && (
      <>
        {isLoading ? (
          <p>Loading...</p> // Render loading state
        ) : (
          playListData.videos.map((item) => (
            <div key={item.id}>
              <p>{item.videoMetaData.title}</p>
            </div>
          ))
        )}
      </>
    )}
  </div>


</div>


  );
}

export default VideoMetaforPlaylist;
