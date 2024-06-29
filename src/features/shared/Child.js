import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react'

const Child = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {

    const handleClick = (e) => {
      console.log(e);
    }

    window.addEventListener('click', (e) => handleClick(e));   //----->here in function conncept, input and output i.e. (e) is similar so line 12 can be written as line 13
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, [])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Child