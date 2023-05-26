import React, { useState ,useRef,useCallback,useEffect, useTransition} from "react";
import "./LoginForm.css";
import axios from "axios";
import Card from "../Card/Card";
import { useSignIn } from "react-auth-kit";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/"; 
    if(userData.email!=""||userData.password!=""){
    navigate(path);}
  }
  let [t,i18n]=useTranslation()
  let inputRef=useRef(null);
  const signin=useSignIn()
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const [userData,setUserData] = useState({email:"",password:""});
  const handleChange=useCallback((e)=>{
    const {value,name}=e.target;
    
    setUserData((oldData)=>({...oldData,[name]:value }))  
},[])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7400/api/users', userData
    ).then((res) => {
      setState("added sussuficallly")
      setUserData({email:"",password:""})
      signin({
        token:res.data.token,
        expiresIn:3600,
        tokenType:"Bearer",
        authState:{email:userData.email}
      })
    }, (error) => {
      console.log("err");
      setError("your user name or password is wrong")
    }
    )
    console.log(userData)


  };
  useEffect(() => {
    inputRef.current.focus();
 }, []);

  // Render error messages

   

  return (<div className="parent_parent_login">
      {i18n.language==="en"&& <input value="AR" className="buttonColor" type="button" onClick={()=>{i18n.changeLanguage("ar")}}></input>}
      {i18n.language==="ar"&&<input value="EN" className="buttonColor" type="button" onClick={()=>{i18n.changeLanguage("en")}}></input>}
    <div className="login_parent">
   

    <Card>
      <h1 className="title">{t("Sign In")}</h1>
      <p className="subtitle">
      {t("Please log in using your email and password!")}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input ref={inputRef}
            type="email" name="email"  placeholder={t("email")}  value={userData.email}    onChange={handleChange}  />
          <input
            type="text" name="password"   placeholder={t("Password")}  value={userData.password}   onChange={handleChange} />
        
        </div>
        <input type="submit" value={t("Log In")} className="login_button"  onClick={routeChange}/>
      </form>
    </Card>
    </div>
    </div>
  );
};

export default LoginForm;
