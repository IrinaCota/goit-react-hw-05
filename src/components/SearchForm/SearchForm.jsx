import toast, { Toaster } from 'react-hot-toast';
import css from './SearchForm.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    searchQuery.trim() === ''
      ? toast.error('Input can not be empty!')
      : onSearch(searchQuery);

    setSearchQuery('');
  };

  return (
    <div>
      <Toaster />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          name="searchQuery"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter movie name"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};