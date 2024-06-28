import React from 'react'
import { useForm } from 'react-hook-form';

function Form({handleFormSubmitData}) {
    const { register, handleSubmit,reset } = useForm();
    const handleFormSubmit=(data)=>{
        handleFormSubmitData(data);
        reset();
    }
  return (
    <div className='w-3/2 h-32  flex flex-col items-center  justify-center mt-10' >
        <form action="" onSubmit={handleSubmit(handleFormSubmit)}  className='flex  flex-col items-center  justify-center gap-5 rounded-lg px-4 py-2'>
            <input {...register("name")} type="text"  id="" placeholder='name' className='flex
            rounded-lg px-4 py-2 font-semibold outline-none'  />
            <input {...register("email")} type="text"  id="" placeholder='email' className='flex
            rounded-lg px-4 py-2 font-semibold outline-none' />
            <input {...register("image")} type="text"  id="" placeholder='image' className='flex
            rounded-lg px-4 py-2 font-semibold outline-none' />
            <input type="submit" name="" id="" className='px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold outline-none' />
        </form>
    </div>
  )
}

export default Form