import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term = 'avengers') => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=5f13299c&s=${term}&type=movie`
    );
    const data = await res.json();
    
    return data

  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term = 'lost') => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=5f13299c&s=${term}&type=series`
    );
    const data = await res.json();
    
    return data
  }
);
export const fetchAsyncMovieOrShow = createAsyncThunk(
  "movies/fetchAsyncMovieOrShow",
  async (id) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=5f13299c&i=${id}&Plot=full`
    );
    const data = await res.json();
     
    return data
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelectedMovieOrShow : (state, action ) => {
       state.selectedMovieOrShow= {}
    }
  },
  extraReducers: {
      [fetchAsyncMovies.pending]: (state) => {
          console.log('pending')
      },
      [fetchAsyncMovies.fulfilled]: (state, action) => {
          state.movies = action.payload
      },
      [fetchAsyncMovies.rejected]: (state) => {
          console.log('rejected')
      },
      [fetchAsyncShows.fulfilled]: (state, action) => {
          state.shows = action.payload
      },
      [fetchAsyncMovieOrShow.fulfilled]: (state, action) => {
        state.selectedMovieOrShow = action.payload
      }
  },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;
