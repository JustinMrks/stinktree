import React from 'react';
import { Quicklink } from '../Models/Quicklink.model';
import './Quicklinks.css';

type QuicklinksState = {
  quicklinks: Quicklink[];
  editing: boolean;
};

const Quicklinks = ({ quicklinks, editing }: QuicklinksState) => {
  const getImage = (
    site:
      | 'instagram'
      | 'twitter'
      | 'facebook'
      | 'youtube'
      | 'tiktok'
      | 'email'
      | 'linkedin'
  ) => {
    const image = require(`../Icons/${site}.png`);
    return <img src={image} alt="" className="quicklink" />;
  };

  return (
    <div className="quicklinksWrapper">
      {quicklinks.map((quicklink, index) => {
        return (
          <a href={quicklink.url} target="_blank" rel="noreferrer" key={index}>
            {getImage(quicklink.linkType)}
          </a>
        );
      })}
    </div>
  );
};

export default Quicklinks;
