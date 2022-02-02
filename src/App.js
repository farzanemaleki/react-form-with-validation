import React, {useState} from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = newUser => {
    setUsersList(prevUsersList => {
      return [newUser , ...prevUsersList];
    });
  };

  return (
    <div className="App">
        <AddUser onAddUser={addUserHandler} />
        <UsersList users= {usersList} />
    </div>
  );
}

export default App;
