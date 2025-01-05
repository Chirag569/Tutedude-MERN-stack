// pages/MutualFriendsPage.js
import React from 'react';
import MutualFriends from '../components/MutualFriends';
import "./MutualFriendsPage.css"

const MutualFriendsPage = () => {
  const userId = 'USER_ID'; // Replace with logged-in user ID
  const friendId = 'FRIEND_ID'; // Replace with friend ID to check against

  return (
    <div className="mutual-friends-page">
      <h1>Mutual Friends</h1>
      <MutualFriends userId={userId} friendId={friendId} />
    </div>
  );
};

export default MutualFriendsPage;
