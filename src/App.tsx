import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

import './App.css';
import UserCard from './Components/UserCard';

function App() {
  const [editing, setEditing] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className="App">
      <Header
        editing={editing}
        setEditing={setEditing}
        burgerMenu={burgerMenu}
        setBurgerMenu={setBurgerMenu}
      />
      <Routes>
        <Route path="/user/:username" element={<UserCard />} />
      </Routes>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
