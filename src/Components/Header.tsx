import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

type HeaderState = {
  editing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  burgerMenu: boolean;
  setBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({
  editing,
  setEditing,
  burgerMenu,
  setBurgerMenu,
}: HeaderState) => {
  const swapBoth = () => {
    setBurgerMenu(!burgerMenu);
    setEditing(!editing);
  };

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

            <button onClick={() => swapBoth()}>Edit Mode</button>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default Header;
