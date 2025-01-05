// pages/SearchPage.js
import React from 'react';
import UserSearch from '../components/UserSearch';
import './SearchPage.css'; // Import CSS

const SearchPage = () => {
  return (
    <div className="search-page">
      <h1>User Search</h1>
      <div className="user-search-container">
        <UserSearch />
      </div>
    </div>
  );
};

export default SearchPage;

