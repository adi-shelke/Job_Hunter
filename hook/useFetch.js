import { useState, useEffect } from "react";
import axios from "axios";
// import data from "../assets/test.json";
const useFetch = (endpoint, query) => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "326795b354msh3dddb826bdf45b4p12e012jsn7ce75fc141da",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await axios.request(options);
      setdata(response.data.data);
      setisLoading(false);
    } catch (error) {
      seterror(error);
      alert("Error occured!");
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setisLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
