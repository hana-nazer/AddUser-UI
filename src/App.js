import { useState } from 'react';
import './App.css';
import AddUser from './components/UserDetails/AddUser';
import UserList from './components/UserDetails/UsersList';

function App() {
  const [usersList,setUsersList]=useState([])

  const addUserHandler=(uName,uAge)=>{
    setUsersList((prevState)=>{
      return[...prevState,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }

  return(
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  )
}

export default App;
