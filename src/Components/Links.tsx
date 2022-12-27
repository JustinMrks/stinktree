import React from 'react';
import Link from './Link';
import './Links.css';

type LinksState = {
  links: {
    id: number;
    name: string;
    description: string;
    url: string;
    userId: number;
  }[];
  editing: boolean;
};

const Links = ({ links, editing }: LinksState) => {
  return (
    <div className="linksWrapper">
      {links.map((link, index) => {
        return <Link link={link} key={index} editing={editing} />;
      })}
    </div>
  );
};

export default Links;
