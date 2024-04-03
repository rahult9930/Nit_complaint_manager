import React from 'react';
import Appbar from './Appbar';
import { TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedIn from './LoggedIn';
const Student = () => {
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
    if(userEmail){
      return (
        <div>
     <Appbar />
     <LoggedIn /> 
        </div>
      )
    
    }
  return (
    <div>
      <Appbar /> 
      <div style={{marginTop:"15%"}}>
        <center>
            <Card style={{
                width:400,
                padding:20,
                backgroundColor:"#FBF9F1",
                marginBottom:10
            }}>
            <div >
               
                <Button variant="contained" onClick={() => {
                  navigate("/Student/Signup")
                }}>Singup</Button>
            </div>
            </Card>
        </center>
        <center>
            <Card style={{
                width:400,
                padding:20,
                backgroundColor:"#FBF9F1",
                marginBottom:10
            }}>
            <div >
               
                <Button variant="contained" onClick={() => {
                    navigate("/Student/Signin")
                }}>Signin</Button>
            </div>
            </Card>
        </center>

    </div>
    </div>
  );
};

export default Student;
