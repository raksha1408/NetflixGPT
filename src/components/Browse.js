
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import GptSearch from './GptSearch'
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';
import { useSelector } from 'react-redux';
const Browse = () => {
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
    usePopularMovies();
useNowPlayingMovies();
useHorrorMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GptSearch/>:( <> <MainContainer/>
        <SecondaryContainer/></>)
      }
   
       
        
      
    </div>
  )
}

export default Browse
