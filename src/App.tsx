import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

import './App.css';
import UserCard from './Components/UserCard';
import UserEdit from './Components/UserEdit';

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
        <Route
          path="/user/:username"
          element={<UserCard editing={editing} />}
        />
        <Route path="/user/:username/edit" element={<UserEdit />} />
      </Routes>
      <footer>Copyright 2022 by Justin Marks. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
