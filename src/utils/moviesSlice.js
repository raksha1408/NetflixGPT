import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:null,
        trailerVideo: null,
        popularMovies:null,
        horrorMovies:null,

    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
          },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
            
        },
        addHorrorVideo: (state, action) => {
            state.horrorMovies = action.payload;
        }
    }
});
export const{ addNowPlayingMovies , addTrailerVideo,addPopularMovies,addHorrorVideo } = moviesSlice.actions;
export default moviesSlice.reducer;