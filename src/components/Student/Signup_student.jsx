import { AppBar, TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';
import Appbar from './Appbar';
import axios from 'axios';

const Signup_student = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <Appbar />
        <div>
        <center style={{
            paddingTop:150,
            marginBottom:10
        }}> 
         <Typography variant='h6'>
         Hello Welcome.Create your account here.
         </Typography>
            
        </center>

        <center>
            <Card style={{
                width:400,
                padding:20,
                backgroundColor:"#FBF9F1"
            }}>
            <div >
                <TextField fullWidth={true} type='email' label="Email" onChange={(e) => {
                    setEmail(e.target.value);
                }}>Email</TextField> <br/><br />
                <TextField fullWidth={true} type="password" label="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }}>Password</TextField> <br />
                <br />
                <Button variant="contained" onClick={ async () => {
                    // fetch("http://localhost:3000/admin/signup",{
                    //     method:"POST",
                    //     body:JSON.stringify({
                    //         username:email,
                    //         password
                    //     }),
                    //     headers:{"Content-Type":"application/json"}
                    // }).then((res) => {
                    //     return res.json();
                    // }).then((data) => {
                    //     console.log(data.token);
                    //     localStorage.setItem("token",data.token);
                    //     window.location = "/";
                    // })
                    const res=await axios.post("http://localhost:3000/Student/signup",{
                        username:email,
                        password
                    })
                    const data=res.data;
                        localStorage.setItem("token",data.token);
                        window.location = "/Student";
                }}>Signup</Button>
            </div>
            </Card>
        </center>
    </div>
    </div>
    
  );
};

export default Signup_student