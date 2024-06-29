import React, { useEffect, useState } from 'react'
import Search from '../shared/Search'
import axios from 'axios'

const Home = () => {
  const [search, setSearch] = useState('spiderman');

  const ab = new AbortController();
  console.log(ab);

  const getData = async (query) => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          qry: query,
          api_key: '34ac47dd6534aa83110f00b143a0db1e'
        },
        signal: ab.signal
      });
      console.log(response.data);
    } catch (error) {

    }
  }


  useEffect(() => {
    getData(search);

    return () => {
      ab.abort();
    }

  }, [search]);
  return (
    <div>
      <Search setSearch={setSearch} />
    </div>
  )
}

export default Home