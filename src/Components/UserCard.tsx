import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { User } from '../Models/User.model';
import Quicklinks from '../Components/Quicklinks';
import UserDisplay from '../Components/UserDisplay';
import Links from '../Components/Links';

const UserCard = () => {
  const [user, setUser] = useState<User>();
  const { username } = useParams();

  const loadUser = (userName: string): void => {
    axios
      .get(`http://localhost:4024/users/${userName}`)
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
  }, []);

  return !user ? (
    <div className="error">no user found</div>
  ) : (
    <>
      <UserDisplay user={user} />
      <Quicklinks quicklinks={user.quickLinks} />
      <Links links={user.links} />
    </>
  );
};

export default UserCard;