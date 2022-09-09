import React from 'react';
import { Quicklink } from '../Models/Quicklink.model';
import './Quicklinks.css';

type QuicklinksState = {
  quicklinks: Quicklink[];
};

const Quicklinks = ({ quicklinks }: QuicklinksState) => {
  const getImage = (
    site: 'instagram' | 'twitter' | 'facebook' | 'youtube' | 'tiktok' | 'email'
  ) => {
    const image = require(`../Icons/${site}.png`);
    return <img src={image} alt="" className="quicklink" />;
  };

  return (
    <ul className="quicklinksWrapper">
      {quicklinks.map((quicklink, index) => {
        return (
          <li key={index}>
            <a href={quicklink.link} target="_blank" rel="noreferrer">
              {getImage(quicklink.linkType)}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Quicklinks;
