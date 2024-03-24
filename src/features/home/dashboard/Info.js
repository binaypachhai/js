import React from 'react'

const Info = () => {
  return (
    <div className='space-y-5'>
      <h1 className="text-center font-semibold text-3xl">Who am I</h1>
      <div className="h-[350px] w-[350px] bg-black rounded-full mx-auto border-[4px] border-red-500 flex flex-col justify-center items-center">
        <div className='text-white'>
          <p>Name : Some Person</p>
          <p>Email: someperson@gmail.com</p>
          <p>Tel:9777777</p>
          <p>Age:90</p>
          <p>Experience:python, java, dart</p>
        </div>
      </div>
    </div>
  )
}

export default Info