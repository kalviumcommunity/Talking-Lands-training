import { useContext } from 'react'
import Navbar from './components/navbar'
import PlaylistCreator from './components/playlistComponents/playlistCreator'
import SearchBar from './components/searchBarComponents/searchBar'
import { PlaylistContext } from './components/UseContext/PlaylistContext'


function App() {
  const {isModalsClicked, setisModalsClicked} = useContext(PlaylistContext)

  return (
    <div>

    <Navbar/>
    <div className='grid grid-cols-main'>
    <SearchBar/>
    <PlaylistCreator/>
    </div>
    </div>
  )
}

export default App
