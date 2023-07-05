import Navbar from './components/navbar'
import Playlist from './components/playlistComponents/playlist'
import SearchBar from './components/searchBarComponents/searchBar'
function App() {
  

  return (
    <div>
    <Navbar/>
    <div className='flex '>
    <SearchBar/>
    <Playlist/>
    </div>
    </div>
  )
}

export default App
