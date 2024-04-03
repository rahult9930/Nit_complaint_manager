import React from 'react';
import Appbar from './Appbar';
import { TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Student = () => {
  const navigate=useNavigate();
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
                    navigate("/Student/Signup")
                }}>Signin</Button>
            </div>
            </Card>
        </center>

    </div>
    </div>
  );
};

export default Student;
