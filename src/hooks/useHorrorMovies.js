import { useEffect } from "react";
import { addHorrorVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";



const useHorrorMovies = () =>{
    const dispatch = useDispatch();
    const horrorMovies = useSelector(
        (store) => store.movies.horrorMovies
      );
    const getHorrorMovie = async() =>{
      const data = await  fetch('https://api.themoviedb.org/3/movie/horror?page=1',
       API_OPTIONS);
       const json = await data.json();
        console.log(json);
        dispatch(addHorrorVideo(json.results));
         
    };
    useEffect(() => {
    //   return () => {
        !horrorMovies && getHorrorMovie();
      
    }, []);
};

export default useHorrorMovies;