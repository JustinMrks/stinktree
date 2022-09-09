import React from 'react';
import './Links.css';

type LinksState = {
  links: { linkName: string; linkDesc: string; url: string }[];
};

const Links = ({ links }: LinksState) => {
  return (
    <div className="linksWrapper">
      {links.map((link) => {
        return (
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="linkWrapper"
          >
            <h2>{link.linkName}</h2>
            <h3>{link.linkDesc}</h3>
          </a>
        );
      })}
    </div>
  );
};

export default Links;
