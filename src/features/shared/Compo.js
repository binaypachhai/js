

import React from 'react'
import { useApiHooks } from '../hooks/apiHooks';

const Compo = () => {

  const [data, load] = useApiHooks('https://dummyjson.com/carts');
  return (
    <div>

    </div>
  )
}

export default Compo