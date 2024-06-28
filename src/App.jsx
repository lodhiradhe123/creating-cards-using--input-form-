import React, { useState } from 'react'
import Form from "./components/Form";
import Cards from "./components/Cards";

function App() {
  const[user,setUser]=useState([])

  const handleFormSubmitData = (data)=>{
    setUser([...user,data])
    // console.log(user)

  }
  const removeUser = (id)=>{
    setUser(user.filter((item,index)=>{
     return index!=id            
    }))

  }

  return (
    <div className='w-full min-h-screen bg-sky-300 flex justify-center items-center flex-col p-5'>
    <Cards user={user} removeUser={removeUser} />
    <Form handleFormSubmitData={handleFormSubmitData}/>
    </div>
  )
}

export default App