import React from 'react';
import LinksEdit from './LinksEdit';
import ProfileEdit from './ProfileEdit';
import QLEdit from './QLEdit';

const UserEdit = () => {
  return (
    <div>
      <ProfileEdit />
      <QLEdit />
      <LinksEdit />
    </div>
  );
};

export default UserEdit;
