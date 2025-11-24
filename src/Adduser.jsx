import React, { useState } from 'react'

function Adduser() {
  const [naam, setnaam] = useState("")
  const [id, setid] = useState("")
  const [email, setemail] = useState("")

  let createuser = async () => {
    let data = { name: naam, id, email }
    let result = await fetch("http://localhost:3000/user", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json()
    console.log(result)
    setnaam('')
    setid('')
    setemail('')
  }

  return (
    <>
      <h1>Adduser</h1>
      <div style={{ justifyContent: 'space-between', textAlign: 'center' }}>
        <input
          type="text"
          placeholder='name'
          value={naam}
          onChange={(e) => setnaam(e.target.value)}
        />
        <br /><br /><hr />
        <input
          type="text"
          placeholder='id'
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
        <br /> <br /><hr />
        <input
          type="text"
          placeholder='email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br /> <br /><hr />
        <button onClick={createuser}>Add User</button>
      </div>
    </>
  )
}

export default Adduser