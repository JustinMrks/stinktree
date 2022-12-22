import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link className="edit-button" to={`/user/${user.userName}/edit`}>
          Edit Your Profile
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserDisplay;
