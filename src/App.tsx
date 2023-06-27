import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

import './App.css';
import UserCard from './Components/UserCard';
import UserEdit from './Components/Editing/UserEdit';

function App() {
  const [editMode, setEditMode] = useState(false);
  //  to be refactored into some form of Authorization (JWT) that will reference the user ID saved on the token to the current userID
  //  to decide to render the edit mode or not (will also have backend checks on all edit/delete/add requests to ensure you cannot get around it)
  const [editing, setEditing] = useState(false);

  return (
    <div className="App">
      <Header editMode={editMode} setEditMode={setEditMode} />
      <Routes>
        <Route
          path="/user/:username"
          element={
            <UserCard
              editMode={editMode}
              editing={editing}
              setEditing={setEditing}
            />
          }
        />
        <Route path="/user/:username/edit" element={<UserEdit />} />
      </Routes>
      <footer>Copyright 2022 by Justin Marks. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
