import React from 'react';
import './Links.css';

type LinksState = {
  links: {
    id: number;
    name: string;
    description: string;
    url: string;
    userId: number;
  }[];
};

const Links = ({ links }: LinksState) => {
  return (
    <div className="linksWrapper">
      {links.map((link) => {
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="linkWrapper"
          >
            <h2>{link.name}</h2>
            <h3>{link.description}</h3>
          </a>
        );
      })}
    </div>
  );
};

export default Links;
