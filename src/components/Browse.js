
import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
function Browse() {
 
     useNowPlayingMovie();  // calling custom hook


  return (
    <div>
      <Header></Header>
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse
