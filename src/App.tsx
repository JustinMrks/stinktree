import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

import './App.css';
import UserCard from './Components/UserCard';
import UserEdit from './Components/Editing/UserEdit';

function App() {
  const [editMode, setEditMode] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className="App">
      <Header
        editMode={editMode}
        setEditMode={setEditMode}
        burgerMenu={burgerMenu}
        setBurgerMenu={setBurgerMenu}
      />
      <Routes>
        <Route
          path="/user/:username"
          element={<UserCard editMode={editMode} />}
        />
        <Route path="/user/:username/edit" element={<UserEdit />} />
      </Routes>
      <footer>Copyright 2022 by Justin Marks. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
