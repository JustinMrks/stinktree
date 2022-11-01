import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import UserCard from './Components/UserCard';

function App() {
  return (
    <>
      <header>Header</header> {/* soon to be menu bar */}
      <Routes>
        <Route path="/user/:username" element={<UserCard />} />
      </Routes>
      <footer>Footer</footer>
      {/* for holding contact info and icon contributors */}
    </>
  );
}

/* <a href="https://iconscout.com/icons/instagram" target="_blank">Instagram Icon</a> by <a href="https://iconscout.com/contributors/wooof-studio" target="_blank">Wooof Studio</a> */

export default App;
