//Los hooks se recomienda nombrarlo con "use" en lower camel case
//para que react sepa que es un hook personalizado
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            error: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();

        setData(data);
        setIsPending(false);
        setError({ error: false });
      } catch (error) {
        setIsPending(true);
        setError({ error });
      }
    };

    getData(url);
  }, [url]);

  // return { data: data, isPending: isPending, error: error };
  return { data, isPending, error };
};
