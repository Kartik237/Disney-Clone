import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "54ccdfc6edf6746df4c1bb9fb3bd16b4";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) => axios.get(genreUrl + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
