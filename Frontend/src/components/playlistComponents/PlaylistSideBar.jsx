import { useContext, useEffect, useState } from "react";
import { PlaylistContext } from "../UseContext/PlaylistContext";

const PlaylistSideBar = () => {
  const { playListStack,setplayListStack,  setplayListId,} = useContext(PlaylistContext);
  const deletePlaylist = (id) => {
    const newStack = playListStack.filter((playlist) => playlist.id !== id);
    setplayListStack(newStack);
  };
  const [isClicked, setisClicked] = useState(false)
  
  const handlePlayListSideBar = (id) => {
    setplayListId(id)
  }

  // useEffect(() => console.log(playListStack), [playListStack])
 
  return (
    <div className="pl-8 pt-8 text-xl text-white font-medium" >
    
        <h1>PlayList Area</h1>
        <hr className="w-4/5 mt-2 rounded-sm" />
      {playListStack.map((item, index) => ( 
        <div key={index} className={`flex justify-start items-center w-3/5 mt-6 hover:bg-[#1a1a1a] p-3 rounded-2xl cursor-pointer`} onClick={() => handlePlayListSideBar(item.id)} >
          <span className="text-base">{item.data.name}</span>
          <div className="hover:bg-primary rounded-xl p-1">

          </div>
          
        </div>
      ))}
    </div>
  );
};

export default PlaylistSideBar;
