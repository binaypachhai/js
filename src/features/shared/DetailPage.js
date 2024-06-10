import React from 'react'
import { useParams } from 'react-router'
import { products } from '../../Dummy/data';

const DetailPage = () => {
  const { id } = useParams();
  const prod = products.find((product) => product.id === Number(id));

  return (
    <div className='p-2'>
      <h1 className='text-2xl pt-2 pb-2 text-red-500' >{prod.title}</h1>
      <div className='grid grid-cols-3 space-x-4 '>

        <div><img className='bg-black ' src={prod.images} alt="" /></div>

        <div>
          <p> Description : {prod.description}</p>
          <p>Price : {prod.price}</p>
          <p>Width : {prod.dimensions.width}</p>
          <p>Depth : {prod.dimensions.depth}</p>
          <p>Height : {prod.dimensions.height}</p>
        </div>




      </div>


    </div>
  )
}

export default DetailPage