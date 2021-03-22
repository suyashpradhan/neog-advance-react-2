import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export const UseAxios = (url) => {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(false);
  const [dataLoader, setDataLoader] = useState(false);

  useEffect(() => {
    (async function () {
      setDataLoader(true);
      try {
        const {
          data: { products }
        } = await axios.get(url);
        setUsersData(products);
        setDataLoader(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [url]);

  return { usersData, error, dataLoader };
};
