import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';

const LoggedIn = () => {
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
              navigate("/Student/addcomplaint")
            }}>Add Complaint</Button>
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
                navigate("/Student/addsuggestion")
            }}>Add Suggestion</Button>
        </div>
        </Card>
    </center>

</div>
  )
}

export default LoggedIn