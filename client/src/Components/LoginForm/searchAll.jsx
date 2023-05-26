import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./searchAll.css"

export default function SearchAll({data}) {
    const [mydata, setData] = useState([]);
    useEffect(() => {
        axios
        .get(`http://localhost:7400/api/search/`)
        .then((res) => {
      setData(res.data)
    })
        
     }, []);
        //      const [filteredData,setFiltered]=useState(mydata);
    
        // let Arr= mydata.filter((std)=>std.includes(data));
        // setFiltered(Arr);
       
   
  return (
    
    <div><table >
    <thead>
      <tr>
        <th>number</th>
        <th>local format</th>
        <th>international format</th>
        <th>country prefix</th>
        <th>country code</th>
        <th>country ame</th>
        <th>location</th>
        <th>carrier</th>
        <th>line type</th>
      </tr>
    </thead>
   {mydata.map((mydata) => (
    <tbody key={mydata.number}>
<tr >
 <td>{mydata.number}</td>
    <td> { mydata.local_format}</td>
    <td>  { mydata.international_format}</td>
    <td>  { mydata.country_prefix}</td>
    <td> { mydata.country_code}</td>
    <td>  { mydata.country_name}</td>
    <td>  { mydata.location}</td>
    <td>  { mydata.carrier}</td>
    <td>  { mydata.line_type}</td>
</tr>
</tbody>
))}
  </table></div>
  )
}
