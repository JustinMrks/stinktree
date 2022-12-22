import React from 'react';
import { User } from '../Models/User.model';
import './UserDisplay.css';

type UserDispState = {
  user: User;
  editing: boolean;
};

const UserDisplay = ({ user, editing }: UserDispState) => {
  return (
    <div className="userProfile">
      <img src={user.userImg} alt="pfp" />
      <h1 id="displayName">{user.displayName}</h1>
      <h3 id="userName">@{user.userName}</h3>
      <p id="bio">{user.bio}</p>
      {editing ? (
        <div>
          <button className="bio-edit">Edit Your Profile</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserDisplay;
