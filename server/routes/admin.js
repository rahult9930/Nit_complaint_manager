const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Complaint, Suggestion } = require("../db");
const JWT_SECRET="NIT_COMPLAINT_MANAGER";
const router = Router();
const jwt = require("jsonwebtoken");

router.get('/me',adminMiddleware,(req,res) =>{ 
  res.json({username:req.user.username});
})
// Admin Routes
router.post('/signup',  (req, res) => {
    const { username, password } = req.body;
    function callback(admin) {
      if (admin) {
        res.status(403).json({ message: 'Admin already exists' });
      } else {
        const obj = { username: username, password: password };
        const newAdmin = new Admin(obj);
        newAdmin.save();
        const token = jwt.sign({ username, role: 'admin' }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token });
      }
  
    }
    Admin.findOne({ username }).then(callback);
  });
  
router.post('/signin', async (req, res) => {
    const { username, password } = req.headers;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
      const token = jwt.sign({ username, role: 'admin' }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });

router.get('/complaints', adminMiddleware, async (req, res) => {
    const complaints = await Complaint.find({});
    res.json({ complaints });
  });

router.get('/suggestions', adminMiddleware,  async (req, res) => {
    const suggestions = await Suggestion.find({});
    res.json({ suggestions });
  });

module.exports = router;