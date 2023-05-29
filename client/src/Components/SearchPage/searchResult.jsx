import axios from 'axios';
import  { useEffect, useState } from 'react'

export default function SearchResult({data}) {
console.log(data)
    useEffect(() => {
      axios.post('http://localhost:7400/api/search', data
      ).then((res) => {
    console.log("done")
        // setUserData({phone:""})
      }, (error) => {
        console.log("err");
      }
      )
   }, [data]);
}


