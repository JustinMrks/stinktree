import React, { useState } from 'react';
import './App.css';
import UserDisplay from './Components/UserDisplay';
import { Justin } from './Data/testUser1';
import { User } from './Models/User.model';

function App() {
  const [user, setUser] = useState<User>(Justin);

  return (
    <div className="App">
      <UserDisplay user={user} />
    </div>
  );
}

export default App;
