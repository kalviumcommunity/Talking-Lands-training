import { createContext, useState } from "react";

export const PlaylistContext = createContext();

function PlaylistContextProvider({ children }) {
  const [isShowing, setIsShowing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [playListData, setplayListData] = useState();

  const [playListStack, setplayListStack] = useState([]);
  const [playListDataForMain, setplayListDataForMain] = useState({
    PlayListName: "",
    PlayListDesc: "",
  });
  const [playListId, setplayListId] = useState();
  const [isVideoLinkModalOpen, setisVideoLinkModalOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoLinkAdded, setvideoLinkAdded] = useState("");
  const [isModalsClicked, setisModalsClicked] = useState(false);
  const [nameEdit, setNameEdit] = useState(false);
  // const [descEdit, setDescEdit] = useState(false);
  // const [editedName, setEditedName] = useState(""|| playListData.name);
  // const [editedDesc, setEditedDesc] = useState("");

  return (
    <PlaylistContext.Provider
      value={{
        isShowing,
        setIsShowing,
        isVisible,
        setIsVisible,
        playListData,
        setplayListData,
        playListStack,
        setplayListStack,
        playListId,
        setplayListId,
        playListDataForMain,
        setplayListDataForMain,
        isVideoLinkModalOpen,
        setisVideoLinkModalOpen,
        isModalsClicked,
        setisModalsClicked,
        videoLink,
        setVideoLink,
        videoLinkAdded,
        setvideoLinkAdded,
        // editedName,
        // setEditedName,
        // nameEdit,
        // setNameEdit,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

export default PlaylistContextProvider;
