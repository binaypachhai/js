import React from 'react'
import Header from '../../ui/Header'
import Display from './Display'
import Main from './Main'
import { products } from '../../Dummy/data'
import { useNavigate } from 'react-router'

const Home = () => {

  const nav = useNavigate();

  return (
    <div>


      <h1 className='text-2xl py-4  text-center'>Products</h1>

      <div className='p-4'>

        {products.map((product) => {
          return <div onClick={() => nav(`/product/${product.id}`)} key={product.id} className='space-y-2 cursor-pointer '>

            <h1 className='text-xl mt-5'>{product.title}</h1>
            <img src={product.thumbnail} alt="" className='border-black border-2 ' />


          </div>
        }
        )}
      </div>

    </div>

  )
}

export default Home