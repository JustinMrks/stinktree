import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

type HeaderState = {
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ editMode, setEditMode }: HeaderState) => {
  const swapBoth = () => {
    setBurgerMenu(!burgerMenu);
    setEditMode(!editMode);
  };

  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className="header">
      <nav>
        <button
          className="nav-opener"
          onClick={() => setBurgerMenu(!burgerMenu)}
        >
          =
        </button>
        {burgerMenu ? (
          <div className="aria">
            <Link
              className="justin"
              to="/user/JustinMarksTheSpot"
              onClick={() => setBurgerMenu(!burgerMenu)}
            >
              Justin
            </Link>
            <Link
              className="justin"
              to="/user/WillWearingOfficial"
              onClick={() => setBurgerMenu(!burgerMenu)}
            >
              Will
            </Link>
            <Link
              className="justin"
              to="/user/Mikeyboy"
              onClick={() => setBurgerMenu(!burgerMenu)}
            >
              Mike
            </Link>

            <button className="justin" onClick={() => swapBoth()}>
              Edit Mode
            </button>
            {/* to be refactored into some form of Authorization (JWT) that will reference the user ID saved on the token to the current userID
            to decide to render the edit mode or not (will also have backend checks on all edit/delete/add requests to ensure you cannot get around it) */}
          </div>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default Header;
