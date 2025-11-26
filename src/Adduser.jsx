// ...existing code...
import React, { useState } from 'react'

function Adduser() {
  const [naam, setnaam] = useState("")
  const [id, setid] = useState("")
  const [email, setemail] = useState("")

  const styles = {
    page: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #f7fbff 0%, #eef2f7 100%)',
      padding: 24,
      boxSizing: 'border-box'
    },
    card: {
      width: '100%',
      maxWidth: 520,
      background: '#ffffff',
      borderRadius: 12,
      padding: 24,
      boxShadow: '0 10px 30px rgba(2,6,23,0.08)',
      textAlign: 'center',
    },
    heading: {
      fontSize: 22,
      fontWeight: 700,
      margin: 0,
      marginBottom: 18,
      color: '#0f172a'
    },
    input: {
      width: '90%',
      padding: '12px 14px',
      fontSize: 15,
      borderRadius: 10,
      border: '1px solid #e6e9ef',
      marginBottom: 14,
      outline: 'none',
      boxShadow: 'inset 0 1px 2px rgba(2,6,23,0.03)',
      transition: 'box-shadow .15s, transform .12s'
    },
    inputFocus: {
      boxShadow: '0 6px 18px rgba(16, 24, 40, 0.06)',
      transform: 'translateY(-1px)'
    },
    btn: {
      padding: '10px 14px',
      background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      color: '#fff',
      border: 'none',
      borderRadius: 10,
      cursor: 'pointer',
      fontWeight: 700,
      fontSize: 15,
      marginTop: 6,
      minWidth: 140,
      boxShadow: '0 8px 24px rgba(59,130,246,0.18)'
    }
  }

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
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Add User</h1>

        <input
          type="text"
          placeholder='Name'
          value={naam}
          onChange={(e) => setnaam(e.target.value)}
          style={styles.input}
        />
       

        <input
          type="text"
          placeholder='ID'
          value={id}
          onChange={(e) => setid(e.target.value)}
          style={styles.input}
        />
        

        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
          style={styles.input}
        />
   

        <button onClick={createuser} style={styles.btn}>Add User</button>
      </div>
    </div>
  )
}

export default Adduser
// ...existing code...