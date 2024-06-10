import React, { Children } from 'react'

import Home from './features/home/Home'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './features/About';
import RootLayout from './features/home/RootLayout';
import NotFound from './ui/NotFound';
import DetailPage from './features/shared/DetailPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />,

      children: [
        { index: true, element: <Home /> },
        { path: 'product/:id', element: <DetailPage /> },
        { path: 'about', element: <About /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ]);




  return <RouterProvider router={router} />
}

export default App