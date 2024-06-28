import React from "react";

function Card({user,index,removeUser}) {
  return (
    <>
        <div key={index}
          className="w-40 mt-5 bg-zinc-100 rounded-lg flex flex-col items-center p-2
   "
        >
          <div className="img w-16 h-16 bg-red-200 rounded-full overflow-hidden ">
            <img src={user.image} alt="" className="object-cover w-full"/>
          </div>
          <h1 className="text-lg font-bold tracking-tighter leading-none text-center">
           {user.name}
          </h1>
          <h1 className="font-semibold">{user.email}</h1>
          <br />
          <p className="text-sm font-light tracking-tighter leading-none text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur quod harum odio.
          </p>
          <button onClick={()=>removeUser(index)} className="px-3 py-1 bg-red-400 rounded-lg mt-2 text-white capitalize">
            remove
          </button>
        </div>;
    </>
  );
}

export default Card;
