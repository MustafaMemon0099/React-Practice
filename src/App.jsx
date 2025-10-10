import React from 'react'
import App from './clock'
const userdata = [
  {
    name: 'Mustafa',
    age : '15',
    Email: "mustafa@App.com" ,
    Id : "111"
  },
   {
    name: 'Ali',
    age : '20',
    Email: "ali@App.com" ,
    Id : "222"
  },
   {
    name: 'anil',
    age : '22',
    Email: "anil@App.com" ,
    Id : "333"
  },
   {
    name: 'sam',
    age : '19',
    Email: "sam@App.com" ,
    Id : "444"
  },
]
function App1() {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>name</td>
            <td>age</td>
            <td>Email</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          {
            userdata.map((user)=>(
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.Email}</td>
              <td>{user.Id}</td>
            </tr>
            ))
          }
        </tbody>
      </table>
      <App/>
    </div>
  )
}

export default App