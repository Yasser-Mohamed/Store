import React, { useState } from 'react'
import "./Login.css"
import { useDispatch } from 'react-redux'
import {login} from "../../features/authSlice"

const Login = () => {
    const [values, setValue]= useState({
        name:"",
        password:"",
    })
    const onChange = (e)=>{
        const {name, value}= e.target; 
        setValue({...values,[name]: value})
    }
    const dispatch = useDispatch()

  return (
    <section className="w-full h-[100vh] flex justify-center items-center bg-[#23242a]">
        <div className="box">
        <div className="form">
            <h2>Sign in</h2>
            <div className="input">
                <input type="text" onChange={onChange} value={values.name} name='name' required="required"/>
                <span>UserName</span>
                <i></i>
            </div>
            <div className="input">
                <input type="password" onChange={onChange} value={values.password} name='password' required="required"/>
                <span>Password</span>
                <i></i>
            </div>
            <div className="links">
                <a href="#">Forgot Password ?</a>
                <a href="#">Sign Up</a>
            </div>
            <input type="submit" onClick={()=> dispatch(login(values))} value="Login"/>
        </div>
    </div>
    </section>
  )
}

export default Login