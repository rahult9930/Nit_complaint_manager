import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';
const Appbar = () => {
    const navigate=useNavigate();
    const [userEmail,setUserEmail]=useState(null);

    useEffect(()=>{
         fetch("http://localhost:3000/student/me",{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
         }).then((res)=>res.json()).then((data) =>{
            setUserEmail(data.username);
        })
    },[]);

    if(userEmail)
  { 
    return (
    
        <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>
             <div>
            <img src="/nit.png" style={{
                width:30,
                height:30
            }} onClick={() => {navigate("/")}}/>
            <Button variant="text" onClick={() => {navigate("/")}}>Complainer</Button>
        </div>
        <div style={{
            display:'flex'
        }}>
            <Typography >{userEmail}</Typography>
            <Button variant="contained" onClick={()=> {
              localStorage.setItem('token', null);
              setUserEmail(null);
               navigate("/");
            }}>Logout</Button>
        </div>
        </div>
       
      )
  }
  else{
    return (
    
        <div style={{
            display:"flex",
            justifyContent:"space-between"
        }}>
            <div>
            <img src="/nit.png" style={{
                width:30,
                height:30
            }} onClick={() => {navigate("/")}}/>
            <Button variant="text" onClick={() => {navigate("/")}}>Complainer</Button>
        </div>
         <div>

         </div>
        </div>
    )
  }
}

export default Appbar