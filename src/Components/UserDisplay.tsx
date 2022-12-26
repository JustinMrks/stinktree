import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../Models/User.model';
import './UserDisplay.css';

type UserDispState = {
  user: User;
  editMode: boolean;
};

const UserDisplay = ({ user, editMode }: UserDispState) => {
  return (
    <div className="userProfile">
      <img src={user.userImg} alt="pfp" />
      <h1 id="displayName">{user.displayName}</h1>
      <h3 id="userName">@{user.userName}</h3>
      <p id="bio">{user.bio}</p>
      {editMode ? (
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
