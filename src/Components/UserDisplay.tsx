import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../Models/User.model';
import './UserDisplay.css';

type UserDispState = {
  user: User;
  editMode: boolean;
  editing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserDisplay = ({
  user,
  editMode,
  setEditing,
  editing,
}: UserDispState) => {
  return (
    <div className="userProfile">
      <img src={user.userImg} alt="pfp" />
      <h1 id="displayName">{user.displayName}</h1>
      <h3 id="userName">@{user.userName}</h3>
      <p id="bio">{user.bio}</p>
      {editMode ? (
        <button className="edit-button" onClick={() => setEditing(!editing)}>
          Edit Your Profile
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserDisplay;
