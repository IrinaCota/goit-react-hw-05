import { useEffect, useState } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import { getMovieByQuery } from '../../api/api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function MoviesPage() {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieByQuery(query);
        setSearchedMovie(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query]);

  const handleSearch = newQuery => {
    setParams({ query: newQuery });
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <MoviesList movies={searchedMovie} />
    </div>
  );
}