import React, { Fragment, useState, useEffect } from 'react'
import Users from './components/Users'
import { Route, Routes } from 'react-router-dom'
import User from './components/User'
import axios from 'axios'

const App = () => {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get("https://randomuser.me/api/?results=10");
    setUsers(res.data.results);
    // console.log(res.data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <Routes>
      <Route path="/" element={<Users users={users} />} />
      <Route path="/:id" element={<User users={users}/>} />
    </Routes>
  )
}

export default App