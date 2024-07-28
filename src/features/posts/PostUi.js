import { AccordionBody, Button, ButtonGroup } from '@material-tailwind/react'
import React from 'react'
import { useAddPostsMutation, useGetUserPostQuery } from './postApi';

const PostUi = ({ user }) => {

  const { isError, data, error, isLoading, isFetching } = useGetUserPostQuery(user);



  const [addPost, { isLoading: load, data: dat, error: err }] = useAddPostsMutation(user);



  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  // console.log(data);


  return (
    <div>

      <AccordionBody>
        <div className='flex justify-between mb-4'>
          <h1 className='text-lg text-gray-800' >  {user.info} </h1>
          <Button loading={load} onClick={() => addPost(user)} size='sm' className='bg-green-900'>Add</Button>
        </div>
        {data?.map((post) => {
          return <div key={post.id} className='flex justify-between space-y-4 items-baseline'>
            <h1>{post.title}</h1>
            <Button size='sm' className='bg-red-900'>Delete</Button>
          </div>

        })}

      </AccordionBody>

    </div>
  )
}

export default PostUi