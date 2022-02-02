//fetch data useState
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Users } from "./Users";
import { Outlet, useSearchParams } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function UserFetchingList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const params = useParams()
  const userId = params.userId


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        setLoading(false)
        setUsers(response.data)
        setError('')
    })
    .catch(error => {
        setLoading(false)
        setUsers({})
        setError('Something went wrong')
    })
  }, []);

  return <div className="App pd divcolor2"><h2>List </h2><br/>
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.id}. {user.name} </li>
      ))}
    </ul>
    <Outlet/>
    <br></br>
    <div>
      <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
     
    </div>
    {
      showActiveUsers ? <h2>Show active users</h2> : <h2>Show all users</h2>
    }
  </div>;
}

export default UserFetchingList;
