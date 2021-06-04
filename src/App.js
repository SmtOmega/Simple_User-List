
import { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {

  const [userList, setUserList] = useState([])
  const addUserHandler = (userN, userA) => {
    setUserList(prevState => {
      return [...prevState, {name: userN, age: userA, id: Math.random().toString()}]
    })
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </>
  );
}

export default App;
