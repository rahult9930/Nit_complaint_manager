import { AppBar, TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';
import Appbar from './Appbar';
import axios from 'axios';

const Addcomplaint = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [branch, setBranch] = useState("");
    const [Roll_no, setRoll_no] = useState("");
    const [Contact_number, setContact_number] = useState("");
  return (
    <div>
        <Appbar />
        <div>
        <center style={{
            paddingTop:150,
            marginBottom:10
        }}> 
         <Typography variant='h6'>
        Write Your Complaint Here.
         </Typography>
            
        </center>

        <center>
            <Card style={{
                width:400,
                padding:20,
                backgroundColor:"#FBF9F1",
            }}>
            <div>
                <TextField fullWidth={true} label="Title" onChange={(e) => {
                    setTitle(e.target.value);
                }}>Email</TextField> <br/><br />
                <TextField fullWidth={true} label="Description" onChange={(e) => {
                    setDescription(e.target.value);
                }}>Password</TextField> <br />
                <TextField fullWidth={true}  label="Branch" onChange={(e) => {
                    setBranch(e.target.value);
                }}>Name</TextField> <br />
                <TextField fullWidth={true} label="Roll Number" onChange={(e) => {
                    setRoll_no(e.target.value);
                }}>Name</TextField> <br />
                <TextField fullWidth={true} label="Contact Number" onChange={(e) => {
                    setContact_number(e.target.value);
                }}>Contact Number</TextField> <br />
                <br />
                <Button variant="contained" onClick={ async () => {
                    const token = localStorage.getItem('token'); // assuming the token is stored in localStorage

            const res = await axios.post("http://localhost:3000/Student/addcomplaint", {
                title,
                description,
                branch,
                Roll_no,
                Contact_number
}           , {
                headers: {
                   'Authorization': `Bearer ${token}` // include the token in the headers with the 'Authorization' key
                }
            })

            const data = res.data;
            window.location = "/Student";

                }}>Send Complaint</Button>
            </div>
            </Card>
        </center>
    </div>
    </div>
    
  );
};

export default Addcomplaint