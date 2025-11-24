import React, { useState } from 'react'

function Home() {

  const [userdata, setUserdata] = useState([]); // API ka data store hoga

  const getuserdata = async () => {
    let data = await fetch("http://localhost:3000/user")
    data = await data.json()
    setUserdata(data); // yahan state me save ho raha
  }

  return (
    <>
      <h1>hello</h1>

      <button onClick={getuserdata}>get data</button>

      <h2>API Data:</h2>

      {userdata.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <hr />
        </div>
      ))}
   
    </>
  )
}

export default Home
