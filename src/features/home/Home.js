import React from 'react'
import { Button } from "@material-tailwind/react";

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';


const Home = () => {
  const nav = useNavigate();
  const { users } = useSelector((state) => state.userSlice);  // useSelector() gives initial state
  // console.log(users);

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>
          <h1>{user.username}</h1>
          <img src={user.imageReview} alt="" />
          <Button onClick={() => nav(`/updateForm/${user.id}`, { state: user })}>Edit</Button>
        </div>
      })}

    </div>
  )
}

export default Home