import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Edit() {
  const [name, setName] = useState("");   // naam -> name
  const [id2, setId2] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams(); 
  const navigate = useNavigate();

  const styles = {
    page: { minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '40px 20px', background: '#f5f7fb' },
    card: { background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 10px 30px rgba(2,6,23,0.08)', width: '100%', maxWidth: 480, boxSizing: 'border-box' },
    heading: { margin: 0, marginBottom: 16, color: '#0f172a', fontSize: 22, fontWeight: 700 },
    input: { width: '90%', padding: '12px 14px', fontSize: 16, borderRadius: 8, border: '1px solid #e6e9ef', marginBottom: 12, outline: 'none', boxShadow: 'inset 0 1px 2px rgba(16,24,40,0.03)' },
    button: { padding: '10px 16px', background: 'linear-gradient(135deg,#2563eb,#4f46e5)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 700, marginTop: 8 }
  };

  useEffect(() => {
    getUserData();
  }, [id]);   // dependency fix

  const getUserData = async () => {
    let data = await fetch(`http://localhost:3000/user/${id}`);
    data = await data.json();
    setName(data.name || data.naam);   // API field fix
    setId2(data.id);
    setEmail(data.email);
  };

  const updateUser = async () => {
    let res = await fetch(`http://localhost:3000/user/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, id: id2, email })  // API key fix
    });

    if (res.ok) {
      alert("User Updated Successfully!");
      navigate("/");   // go back to home
    } else {
      alert("Update Failed!");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Edit User Details</h1>

        <input
          type="text"
          placeholder="name"
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="id"
          style={styles.input}
          value={id2}
          onChange={(e) => setId2(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> 
        <button style={styles.button} onClick={updateUser}>Confirm User</button>
      </div>
    </div>
  );
}

export default Edit;
