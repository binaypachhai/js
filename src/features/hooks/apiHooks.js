


import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../ui/Loading";

export const useApiHooks = (api) => {


  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(false);
  const [pag, setPag] = useState(1);

  const getData = async () => {
    try {
      setLoad(true);
      const response = axios.get(api, {
        params: {
          page: pag
        }
      });
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
    }
  }

  useEffect(() => {
    getData();


  }, [pag]);

  if (load) {
    return <Loading />
  }

  return [data, load];
}