import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);

  // GET USERS FROM API
  const getuserdata = async () => {
    let data = await fetch("http://localhost:3000/user");
    data = await data.json();
    setUsers(data);
  };

  // AUTO LOAD ON PAGE OPEN
  useEffect(() => {
    getuserdata();
  }, []);

  // DELETE USER FROM API
  const deleteUser = async (id) => {
    console.log("Deleting:", id);

    let res = await fetch(`http://localhost:3000/user/${id}`, {
      method: "DELETE"
    });

    if (res.ok) {
      // Screen se bhi remove
      setUsers(users.filter((user) => user.id !== id));
    } else {
      console.log("Delete failed, status:", res.status);
    }
  };
    const editUser = async (id) => {
      navigate(`/edit/${id}`);
    };
  return (
    <>
      <h1>Home Page</h1>

      <button onClick={getuserdata}>Reload Users</button>

      <h2>API Data:</h2>

      {users.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name || item.naam}</p>
          <p>Email: {item.email}</p>
          
          <button onClick={() => deleteUser(item.id)}>Delete</button>
           <button onClick={() => editUser(item.id)}>Edit</button>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Home;
