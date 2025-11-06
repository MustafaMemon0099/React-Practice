import React from 'react'

function FormHandel() {
    function hello (e) {
        e.preventDefault();
        console.log("hello form handel");
    }
  return (
    <div>
        <form onSubmit={function(e){
            hello(e)
        }}>
            <input type="text" placeholder='enter your name' />
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default FormHandel