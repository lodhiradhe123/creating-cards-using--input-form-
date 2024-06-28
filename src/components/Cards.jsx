import React from 'react'
import Card from './Card'

function cards({user,removeUser}) {
  return (
    <div  className='w-full h-96 overflow-auto  bg-sky-900 flex justify-center items-center flex-wrap p-2 gap-3 '>
           {user.map((item,index)=>{
            return <Card user={item} index={index} removeUser={removeUser} />
           })}
    </div>
  )
}

export default cards