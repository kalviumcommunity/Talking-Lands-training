import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { PlaylistContext } from "../UseContext/PlaylistContext";
import ReactPlayer from "react-player/youtube";
import AddVideosPlaylist from "./addVideos&Playlist";

function PlaylistMain() {
  const {
    playListStack,
    playListId,
    setplayListId,
    playListDataForMain,
    setplayListDataForMain,
    editedName,
    setEditedName,
    nameEdit,
    setNameEdit,
    setplayListData
  } = useContext(PlaylistContext);
  useEffect(() => {
    if (playListId !== null) {
      const selectedPlaylist = playListStack.find(
        (item) => item.id === playListId
      );
      if (selectedPlaylist) {
        setplayListDataForMain(selectedPlaylist.data);
        // console.log(playListStack)
      } else {
        setplayListDataForMain(null);
        setplayListId(null);
      }
    } else {
      setplayListDataForMain(null);
    }
  }, [playListId, playListStack, setplayListDataForMain, setplayListId]);

  
  const [descEdit, setDescEdit] = useState(false);
  const [editedDesc, setEditedDesc] = useState("");

  return (
    <div className="pt-10 pr-20 z-0 grid grid-cols-video w-full">
      <div>
        <div>
          {playListStack.length === 0 ? (
            <span className="text-white text-3xl font-medium">
              No playlists available
            </span>
          ) : playListDataForMain ? (
            <div className="flex justify-between w-3/6 items-center mb-5">
              {nameEdit ? (
                <div className="flex justify-between  w-3/4">
                  <input
                    type="text"
                    name="name"
                    placeholder="edit the name"
                    onChange={(e) => setEditedName(e.target.value)}
                    className="outline-0 bg-primary h-8  border rounded-lg caret-custom pl-2 pb-1 text-white placeholder:text-white placeholder:opacity-30"
                  />
                  <button
                    className="h-8 bg-pink w-9 rounded-lg text-white text-sm font-semibold"
                    onClick={() => {
                      setNameEdit(!nameEdit);
                      setplayListData((prev) => ({
                        ...prev,
                        name: editedName
                      }));
                    }}
                    
                  >
                    edit
                  </button>
                </div>
              ) : (
                <div className="flex justify-between  w-3/4">
                  <span className="text-white text-3xl font-medium">
                    {/* {editedName.length === 0
                      ? playListDataForMain?.name
                      : editedName} */}
                      {playListDataForMain?.name}
                  </span>
                  <svg
                    width="16"
                    viewBox="0 0 73 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setNameEdit(!nameEdit)}
                  >
                    <path
                      d="M0 58V73H15L59.24 28.76L44.24 13.76L0 58ZM70.84 17.16C72.4 15.6 72.4 13.08 70.84 11.52L61.48 2.16C59.92 0.599998 57.4 0.599998 55.84 2.16L48.52 9.48L63.52 24.48L70.84 17.16Z"
                      fill="white"
                    />
                  </svg>
                </div>
              )}
            </div>
          ) : (
            "No selected playlist"
          )}

          {playListDataForMain ? (
            <div className="flex justify-between w-3/6 items-center mb-5">
              {descEdit ? (
                <div className="flex justify-between  w-3/4">
                  <input
                    type="text"
                    name="name"
                    placeholder="edit the description"
                    onChange={(e) => setEditedDesc(e.target.value)}
                    className="outline-0 bg-primary h-8  border rounded-lg caret-custom pl-2 pb-1 text-white placeholder:text-white placeholder:opacity-30"
                  />
                  <button
                    className="h-8 bg-pink w-9 rounded-lg text-white text-sm font-semibold"
                    onClick={() => setDescEdit(!descEdit)}
                  >
                    edit
                  </button>
                </div>
              ) : (
                <div className="flex justify-between  w-2/4">
                  <span className="text-white text-md">
                    {editedDesc.length === 0
                      ? playListDataForMain?.desc
                      : editedDesc}
                  </span>
                  <svg
                    width="16"
                    viewBox="0 0 73 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setDescEdit(!descEdit)}
                  >
                    <path
                      d="M0 58V73H15L59.24 28.76L44.24 13.76L0 58ZM70.84 17.16C72.4 15.6 72.4 13.08 70.84 11.52L61.48 2.16C59.92 0.599998 57.4 0.599998 55.84 2.16L48.52 9.48L63.52 24.48L70.84 17.16Z"
                      fill="white"
                    />
                  </svg>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          {playListDataForMain ? (
            <ReactPlayer
              url="https://twitter.com/i/status/1677275029640478721"
              controls={true}
            />
          ) : null}
        </div>
      </div>
      <div className="ml-24 mt-2">
        {playListStack.length === 0 ? (
          <h3 className="text-white text-lg font-regular mb-5">
            No videos to show
          </h3>
        ) : !playListDataForMain ? (
          <h3 className="text-white text-lg font-regular mb-5">
            {" "}
            Select a playlist to see the videos
          </h3>
        ) : (
          <AddVideosPlaylist />
        )}
      </div>
    </div>
  );
}

export default PlaylistMain;
