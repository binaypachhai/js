import React, { useState } from 'react'
import { useGetUsersQuery } from '../users/userApi';
import { Accordion, AccordionHeader } from '@material-tailwind/react';
import PostUi from '../posts/PostUi';


const Home = () => {

  const { isError, data, error, isLoading } = useGetUsersQuery();


  const [opens, setOpens] = useState([]);

  const handleClick = (index) => {
    if (opens.includes(index)) {
      const pos = opens.indexOf(index);
      opens.splice(pos, 1);
    } else {
      opens.push(index);
    }
    setOpens([...opens]);
  }

  // console.log(opens);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  // console.log(data);


  return (
    <div className='p-4 max-w-[400px]'>

      {data.map((user, i) => {
        return <Accordion open={opens.includes(i)} key={user.id}>
          <AccordionHeader onClick={() => handleClick(i)} >{user.username}</AccordionHeader>

          {opens.includes(i) && <PostUi user={user} />}

        </Accordion>


      })}
    </div>
  )
}

export default Home