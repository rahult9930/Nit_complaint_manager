const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/student");
const { Student, Complaint , Suggestion} = require("../db");
const studentMiddleware = require("../middleware/student");
const JWT_SECRET="NIT_COMPLAINT_MANAGER";
const jwt = require("jsonwebtoken");
// User Routes
router.get('/me',studentMiddleware,(req,res) =>{ 
  res.json({username:req.username});
})
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await Student.findOne({ username });
    if (user) {
      res.status(403).json({ message: 'Student already exists' });
    } else {
      const newStudent = new Student({ username, password });
      await newStudent.save();
      const token = jwt.sign({ username, role: 'user' }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Student created successfully', token });
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await Student.findOne({ username });
    if (user) {
      const token = jwt.sign({ username, role: 'user' }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

router.post('/addcomplaint', studentMiddleware, (req, res) => {
    const {title , description, branch , Roll_no ,Contact_number } = req.body;
    const newComplaint = new Complaint({title , description, branch , Roll_no ,Contact_number });
    newComplaint.save();
    res.status(200).json({message: "Complaint filed successfully", Complaint:newComplaint});
});
router.post('/addsuggestion', studentMiddleware,(req, res) => {
    const {title , description, branch , Roll_no ,Contact_number } = req.body;
    const newSuggestion = new Suggestion({title , description , branch , Roll_no , Contact_number });
    newSuggestion.save();
    res.status(200).json({message: "Suggestion filed successfully",Suggestion:newSuggestion});
});

// router.get('/courses/complaints', studentMiddlewareMiddleware, (req, res) => {
    
    

// });

// router.get('/suggestions', studentMiddlewareMiddleware, (req, res) => {
//     // Implement fetching purchased courses logic
// });

module.exports = router