import React from 'react';
import { Quicklink } from '../Models/Quicklink.model';

const INSTAGRAM = 'instagram';
const TWITTER = 'twitter';
const FACEBOOK = 'facebook';
const YOUTUBE = 'youtube';
const TIKTOK = 'tiktok';
const thing = '../Icons/';

type QuicklinksState = {
  quicklinks: Quicklink[];
};

const Quicklinks = ({ quicklinks }: QuicklinksState) => {
  const getImage = (
    site: 'instagram' | 'twitter' | 'facebook' | 'youtube' | 'tiktok' | 'email'
  ) => {
    const image = require(`../Icons/${site}.png`);
    return <img src={image} alt="" />;
  };

  return (
    <div>
      <ul className="quicklinkList">
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
    </div>
  );
};

export default Quicklinks;
