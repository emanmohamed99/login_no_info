import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function SearchResult({data}) {
    console.log(data)
    const [state, setState] = useState("");
    useEffect(() => {
      axios.post('http://localhost:7400/api/search', data
      ).then((res) => {
        setState("added sussuficallly")
        // setUserData({phone:""})
      }, (error) => {
        console.log("err");
      }
      )
   }, [data]);
  return (
    <></>
  )
}


