import React, { createContext } from 'react'

export const Subjectcontext = createContext("Maths")

function Subject() {
  return (
    <div style={{ backgroundColor: "orange", padding: 60 }}>
      <h1>Subject : {Subjectcontext}</h1>
    </div>
  )
}

export default Subject
