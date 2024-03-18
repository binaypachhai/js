import React from 'react'
import Header from './ui/Header'
import Footer from './ui/Footer'
import HomePage from './features/home/HomePage'

const App = () => {
  return (
    <div>
      <Header />
      <hr className='border-2 border-red-500' />
      <HomePage />
      <hr className='border-2 border-red-500' />
      <Footer />
    </div>
  )
}

export default App