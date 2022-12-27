import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { User } from '../Models/User.model';
import Quicklinks from '../Components/Quicklinks';
import UserDisplay from '../Components/UserDisplay';
import Links from '../Components/Links';
import './UserCard.css';

type UserCardState = {
  editMode: boolean;
  editing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserCard = ({ editMode, editing, setEditing }: UserCardState) => {
  const [user, setUser] = useState<User>();
  const { username } = useParams();

  const loadUser = (userName: string): void => {
    axios
      .get(`http://localhost:3000/users/${userName}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadUser(username!);
  }, [username]);

  return !user ? (
    <div className="error">No user found with username: {username}</div>
  ) : (
    <>
      <UserDisplay
        user={user}
        editMode={editMode}
        editing={editing}
        setEditing={setEditing}
      />
      <Quicklinks quicklinks={user.quickLinks} />
      <Links links={user.links} editing={editing} />
    </>
  );
};

export default UserCard;
