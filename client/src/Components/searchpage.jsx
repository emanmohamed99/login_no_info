import axios from 'axios';
import React, { useEffect, useState } from 'react'

import  { useCallback, useRef } from 'react';

import SearchResult from './searchResult';
import SearchAll from './LoginForm/searchAll';
import { FaSearch } from 'react-icons/fa';
import "./searchPage.css"
import { useTranslation } from 'react-i18next';
export default function Searchpage() {
        let inputRef=useRef(null);
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
                  .get(`http://apilayer.net/api/validate?access_key=3a12d124bf1864eef8786bc7c8e51a02&number=${phone}&country_code=&format=1"`)
                  .then((res) => {
                setData(res.data)
              })
          
          
              console.log(data)
            }
            useEffect(() => {
               inputRef.current.focus();
            }, []);
    
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
    <SearchAll data>{data}</SearchAll>
    <SearchResult data={data}></SearchResult>
        </div>
      )
    
    
}

//`http://apilayer.net/api/validate?access_key=9b4de5ad5b290cb93638a1f67713501a&number=${01005468048}&country_code=${EG}&format=1`