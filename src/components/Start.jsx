import { TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
  return (
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
                  navigate("/Admin")
                }}>Admin</Button>
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
                    navigate("/HOD")
                }}>HOD</Button>
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
                 navigate("/Student")
                }}>Student</Button>
            </div>
            </Card>
        </center>
    </div>
  )
}

export default Signup