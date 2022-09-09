import React, { useState, useEffect } from 'react';
import './App.css';
import Quicklinks from './Components/Quicklinks';
import UserDisplay from './Components/UserDisplay';
import { Justin } from './Data/testUser1';
import { User } from './Models/User.model';
import Links from './Components/Links';

function App() {
  const [user, setUser] = useState<User>();

  const loadUser = () => {
    setUser(Justin);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="App">
      {!user ? (
        'Loading...'
      ) : (
        <>
          <header>Header</header> {/* soon to be menu bar */}
          <UserDisplay user={user} />
          <Quicklinks quicklinks={user.quicklinks} />
          <Links links={user.links} />
          <footer>Footer</footer>
        </>
      )}
      {/* for holding contact info and icon contributors */}
    </div>
  );
}

/* <a href="https://iconscout.com/icons/instagram" target="_blank">Instagram Icon</a> by <a href="https://iconscout.com/contributors/wooof-studio" target="_blank">Wooof Studio</a> */

export default App;
