import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
}

export default App;














































// import React from 'react'

// import Home from './features/home/Home'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import About from './features/About';
// import RootLayout from './features/home/RootLayout';
// import NotFound from './ui/NotFound';



// const App = () => {

//   const router = createBrowserRouter([
//     {
//       path: '/', element: <RootLayout />,

//       children: [
//         { index: true, element: <Home /> },


//         { path: 'about', element: <About /> },
//         { path: '*', element: <NotFound /> },
//       ]
//     }
//   ]);




//   return <RouterProvider router={router} />
// }

// export default App












// // import React, { useState } from 'react'

// // const App = () => {

// //   const [count, setCount] = useState(0);



// //   const Incre = () => {
// //     setCount((prev) => count + 1);
// //     // setCount(count + 1);    ----> another way
// //   }
// //   const Decre = () => {

// //     setCount(count - 1);
// //   }

// //   console.log('render');
// //   return (
// //     <div className='p-3 ' >
// //       <button onClick={Incre}>Increment</button>
// //       <h1 className='text-2xl'>{count}</h1>

// //       <button on onClick={Decre}>Decrement</button>



// //     </div>
// //   )
// // }

// // export default App














// // import { useFormik } from 'formik';
// // import React, { useState } from 'react'

// // const App = () => {

// //   const [posts, setPost] = useState([]);

// //   const formik = useFormik({
// //     initialValues: {
// //       post: ''       // ---> post is from the name of <input> of form
// //     },
// //     onSubmit: (e, { resetForm }) => {
// //       setPost((prev) => [...prev, e.post]);
// //       resetForm();
// //     }
// //   });

// //   const deletePost = (index) => {
// //     setPost((prev) => prev.filter((_, i) => i !== index));
// //   };
// //   return (
// //     <div className='flex flex-col p-2'>
// //       <h1 className='text-blue-900'>Combined sumbitted keywords: </h1>{posts}

// //       <form onSubmit={formik.handleSubmit}>
// //         <div className='space-x-2'>
// //           <label htmlFor="post">Add Info :</label>
// //           <input onChange={formik.handleChange} className='border-2 border-black ' type="text" value={formik.values.post} placeholder='post add' name='post' />

// //         </div>
// //         <button type='submit' className='border-black border-2 bg-light-blue-500 text-white'>Submit</button>
// //       </form>

// //       <h1 className='text-blue-900'>Individual sumbitted keywords: </h1>
// //       {posts.map((post, i) => {
// //         return <div key={i} className='shadow-lg py-2 flex space-y-4'>

// //           {post}<button onClick={() => deletePost(i)} className='bg-red-900  text-white'>Delete</button>
// //         </div>
// //       })}
// //     </div >
// //   )
// // }

// // export default App









// // import React, { useState } from 'react'

// // const App = () => {
// //   const [count, setCount] = useState(0);
// //   const [show, setShow] = useState(false);
// //   return (
// //     <div>
// //       <button onClick={() => setCount(count + 1)}>Increment</button>
// //       <h1>{count}</h1>
// //       <button onClick={() => setShow(!show)}>Toggle</button>
// //       {show && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem minus neque, repellendus consequuntur beatae excepturi? Voluptate necessitatibus mollitia impedit hic.</p>}
// //     </div>
// //   )
// // }

// // export default App














// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'

// // const App = () => {
// //   const [data, setData] = useState([]);

// //   const getData = async () => {
// //     try {
// //       const response = await axios.get('https://dummyjson.com/products');
// //       setData(response.data);
// //     }
// //     catch (err) {
// //       console.log(err);
// //     }
// //   }
// //   useEffect(() => {
// //     getData();
// //   }, []);

// //   console.log('hello');

// //   return (
// //     <div>
// //       <h1>Hello World</h1>
// //     </div>
// //   )
// // }

// // export default App




















