import axios from 'axios'
import React from "react";

export async function Signup(ResistrationData){
    
    const resp = await axios.post("https://localhost:5001/api/Account/register",ResistrationData)
    console.log(ResistrationData)
    return resp.status
}


export async function Login(LoginData){
    console.log(LoginData)
    const resp = await axios.post("https://localhost:5001/api/account/Login",LoginData)
    
    if(resp.status==200){
        localStorage.setItem('jwt', resp.data);
        
    }
    console.log(localStorage.getItem('jwt'));
    return resp.status
}


export async function haveStartup(){
    let config = 
      console.log(localStorage.getItem('jwt'))
    const resp = await axios.get("https://localhost:5001/api/startup",{
        headers: {
            Authorization: "Bearer "+localStorage.getItem('jwt'),
        }
      })
    
 
      return resp.data

    
}