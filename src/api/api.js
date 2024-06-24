import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
 headers: {
	// Замість api_read_access_token вставте свій токен
 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjRlZjNkZDY5ZmMwYjY3MGQ0OWIzNjdjNDE3ODRlMiIsIm5iZiI6MTcxOTIzNDczNC45NDk3MTEsInN1YiI6IjY2Nzk2ZmY5OTliYjFhNGNhY2EwOTJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yDAUldOQ4uNsoZwdkeRE2FJa9cg0-KeBkLG5JdPpZg'
 }
};
export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/week`, options);
  return response.data;
};

export const getMovieByQuery = async searchQuery => {
  const response = await axios.get(
    `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data;
};