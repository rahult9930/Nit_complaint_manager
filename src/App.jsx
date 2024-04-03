import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './components/Start.jsx';
import Student from './components/Student/Student.jsx';
import Signup_student from './components/Student/Signup_student.jsx';
function App() {
  return (
    <div>
     <Router>
      <Routes>
       { <Route path="/" element={<Start />} />}
       { <Route path="/Student" element={<Student />} />}
       { <Route path="/Student/Signup" element={<Signup_student />} />}
      </Routes>
    </Router>
    
    </div> 
   
  );
}

export default App;
