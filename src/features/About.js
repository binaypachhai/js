import { Button } from '@material-tailwind/react';
import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {

  const nav = useNavigate();
  return (
    <div className='p-2'>
      <h1>The playlist</h1>
      <p>This webapp allows us to get, add and delete data of different users with the use of MockAPI and faker.js </p>

      <div className='mt-2'><Button onClick={() => nav(-1)}>Go Back</Button></div>



    </div>
  )
}

export default About