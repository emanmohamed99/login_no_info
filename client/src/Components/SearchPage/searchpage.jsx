import axios from 'axios';
import React, { useEffect, useState } from 'react'

import  { useCallback, useRef } from 'react';
import SearchAll from './searchAll';
import { FaSearch } from 'react-icons/fa';
import "./searchPage.scss"
import { useTranslation } from 'react-i18next';
import SearchResult from './searchResult';
export default function Searchpage() {
        let inputRef=useRef(null);
        let [visible,setvisible]=useState(false)
        let [t,i18n]=useTranslation()
        const [userData,setUserData] = useState({phone:""});
        const [data,setData] = useState([]);
    const handleChange=useCallback((e)=>{
        const {value,name}=e.target;
        setUserData((oldData)=>({...oldData,[name]:value }))  
    },[])
        const handleSubmit=(e)=>{
            console.log(userData.phone)
            e.preventDefault();
          var phone=userData.phone;
                axios
                .get(`http://localhost:7400/api/search/${phone}`)
                  .then((res) => {
                    console.log(res.data)
                setData(res.data)
                setvisible(true)
              })
            }
    
      return (
        
        <div>
        {i18n.language==="en"&& <input value="AR" className="buttonColor" type="button" onClick={()=>{i18n.changeLanguage("ar")}}></input>}
      {i18n.language==="ar"&&<input value="EN" className="buttonColor" type="button" onClick={()=>{i18n.changeLanguage("en")}}></input>}
    <form onSubmit={handleSubmit}>
    <div className='parent'>
    <div className="search-box">
    <button type='submit' className="btn-search"><FaSearch className='postion'></FaSearch></button>
    <input ref={inputRef}  name="phone" type="text" className="input-search" placeholder={t("Type to Search...")}  value={userData.phone} onChange={handleChange}/>
  </div>
 </div>
 </form>
  {visible&&<div className='table_parent'>
  <table class="table-resp">
  <thead>
    <tr>
      <th>data</th>
      <th>values</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>valid</td>
      <td>{ data.valid}</td>
    </tr>
  <tr>
      <td>number</td>
      <td>{ data.number}</td>
    </tr>
    <tr>
      <td>local format</td>
      <td>{ data.local_format}</td>
    </tr>
    <tr>
      <td>international format</td>
      <td>{ data.international_format}</td>
    </tr>
    <tr>
      <td>country prefix</td>
      <td>{ data.country_prefix}</td>
    </tr>
    <tr>
      <td>country code</td>
      <td>{ data.country_name}</td>
    </tr>
    <tr>
      <td>location</td>
      <td>{ data.location}</td>
    </tr>
    <tr>
      <td>carrier</td>
      <td>{ data.carrier}</td>
    </tr>
    <tr>
      <td>line type</td>
      <td>{ data.line_type}</td>
    </tr>
  </tbody>
</table>
  </div>}
  <SearchResult data={data}></SearchResult>
        </div>
      
      )
    
    
}

