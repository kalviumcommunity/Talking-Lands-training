import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PlaylistContext } from "../UseContext/PlaylistContext";
import GetTimeStamp from "./getTimeStamp";
import { v4 as uuidv4 } from "uuid";

function VideoMetaforPlaylist() {
  const {
    videoLinkAdded,
    playListData,
    setplayListData,
    playListId,
    playListStack,
    setplayListStack,
    isselectedVideo,
  } = useContext(PlaylistContext);

  const Api_key = import.meta.env.VITE_API_KEY;
  const url = videoLinkAdded;
  const videoId = url.split("v=")[1];

  const [prevVideoId, setPrevVideoId] = useState(null); // Store the previous videoId

  useEffect(() => {
    if (videoId && prevVideoId !== videoId) {
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

          setplayListStack((prevData) => {
            const updatedPlayListStack = prevData.map((playlist) => {
              if (playlist.id === playListId) {
                // Update the videos property for the specific playlist
                return {
                  ...playlist,
                  data: {
                    ...playlist.data,
                    videos: [...(playlist.data.videos || []), newVideo],
                  },
                };
              }
              return playlist; // Return the playlist as is if it doesn't match the playListId
            });

            return updatedPlayListStack;
          });

          setplayListData((prevData) => {
            if (prevData && prevData.id === playListId) {
              return {
                ...prevData,
                videos: [...(prevData.videos || []), newVideo],
              };
            } else {
              return prevData;
            }
          });

          console.log(playListData);

          setPrevVideoId(videoId); // Update the previous videoId
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [videoId, prevVideoId]);

  return (
    <div>
      {playListStack.map((playlist) => {
        if (playlist.id === playListId) {
          return (
            <div key={playlist.id}>
              {playlist?.data?.videos?.map((video, index) => (
                <div key={index} className="flex" onClick={() => isselectedVideo(video.link)}>
                  <div>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-40 w-56 rounded-lg cursor-pointer"
                    />
                    <span
                      className="text-white font-medium text-[15px]"
                      title={video.title}
                    >
                      {video.title.length > 40
                        ? `${video.title.slice(0, 40)}...`
                        : video.title}
                    </span>
                    <GetTimeStamp time={video.duration} />
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return null; // Render null for other playlists
      })}
    </div>
  );
}

export default VideoMetaforPlaylist;
