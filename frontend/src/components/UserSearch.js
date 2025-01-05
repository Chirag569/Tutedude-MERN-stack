// components/UserSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import './UserSearch.css'; // Import CSS

const UserSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await axios.get(`/api/users/search?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <div className="user-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="results-container">
        {results.length > 0 ? (
          <ul>
            {results.map((user) => (
              <li key={user._id}>
                <img
                  src={user.profilePicture || '/default-avatar.png'}
                  alt={`${user.username}'s profile`}
                />
                <p>{user.username}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserSearch;

