import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
    const location = useLocation();

    return (
        <div>
    <ul className={css.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={css.movieCard}>
              <Link to={`/movies/${movie.id}`} state={location}>
                <div className={css.boxLink}>
                  <div className={css.poster}>
                        {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className={css.img}
                    />
                  ) : (
                    <div className={css.noImagePlaceholder}>No Image</div>
                  )}
                  </div>

                  <div className={css.title}>
                    <p>{movie.title}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
        </div>
    );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
