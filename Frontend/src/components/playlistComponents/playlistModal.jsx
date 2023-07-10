import React, { useContext, useEffect, useState } from "react";
import { PlaylistContext } from "../UseContext/PlaylistContext";


function PlaylistModal() {
 
  const { isShowing, setIsShowing,playListData, setplayListData,setplayListStack, playListStack} = useContext(PlaylistContext);
  const [isClicked, setisClicked] = useState(false)
  const closePlaylistModal = () => {
    setIsShowing(!isShowing);
  };


  const handlePlaylistFormSubmit = () => {
    // e.preventDefault();
    setplayListStack((prevData) => [...prevData, { id: prevData.length, data: playListData }]);
    // setisClicked(!isClicked)
    console.log(playListStack)
  };
  
  const handlePlaylistFormInput = (event) => {
    const { name, value } = event.target;
    setplayListData((prevFormData) => ({
      ...prevFormData,
    [name]: value,
    }));
    

    // setTimeout(() => {
    //   setIsShowing()
    // })
  };

  // useEffect(() => {
  //   if(isClicked) {
  //     setTimeout(() => {
  //       setIsShowing(!isShowing)
  //     }, 1000)
  //   }
  // }, [isClicked])


  

  
  // const handleButton = () => {
  //   handlePlaylistFormSubmit();
  //   setTimeout(() => {
  //     closePlaylistModal();
  //   }, 1500);
  // };
  
  return (
    <>
      {isShowing && (
        <div className="w-160 h-140 shadow-lg bg-grayblack  rounded-lg  absolute left-40 top-9 z-40">
          <svg
            width="16"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-3 cursor-pointer"
            onClick={closePlaylistModal}
          >
            <path
              d="M56 5.64L50.36 0L28 22.36L5.64 0L0 5.64L22.36 28L0 50.36L5.64 56L28 33.64L50.36 56L56 50.36L33.64 28L56 5.64Z"
              fill="white"
            />
          </svg>
          <div className="pt-9 px-8">
            <div className="mb-8 flex flex-col">
              <label
                htmlFor="name"
                className="text-white  font-medium mb-2"
              >
                Playlist Name
              </label>
              <input
                type="text"
                name="name"
                id=""
                onChange={handlePlaylistFormInput}
                  
                className="outline-0 bg-grayblack border-b-graywhite border-b  caret-custom  text-white"
              />
            </div>
            <div className="mb-8 flex flex-col">
              <label
                htmlFor="description"
                className="text-white font-medium mb-2"
              >
                Playlist Description
              </label>
              <input
                type="text"
                name="desc"
                id=""
                onChange={handlePlaylistFormInput}
                  
                className="outline-0 bg-grayblack border-b-graywhite border-b caret-custom text-white"
              />
            </div>
            <div className="flex justify-center ">
              <button className="h-10 w-17 font-normal  bg-pink text-white rounded-lg mt-4" onClick={handlePlaylistFormSubmit}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlaylistModal;
