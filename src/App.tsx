import React, { useState } from 'react';
import './App.css';
import Quicklinks from './Components/Quicklinks';
import UserDisplay from './Components/UserDisplay';
import { Justin } from './Data/testUser1';
import { User } from './Models/User.model';

function App() {
  const [user, setUser] = useState<User>(Justin);

  return (
    <div className="App">
      <UserDisplay user={user} />
      <Quicklinks quicklinks={user.quicklinks} />
    </div>
  );
}

/* <a href="https://iconscout.com/icons/instagram" target="_blank">Instagram Icon</a> by <a href="https://iconscout.com/contributors/wooof-studio" target="_blank">Wooof Studio</a> */

export default App;
