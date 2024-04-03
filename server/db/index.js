const mongoose = require('mongoose');


//mongoose.connect('mongodb+srv://rahult9930:Okokok%407240@cluster0.js0tu4t.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Complaint Manager" });


const HodSchema = new mongoose.Schema({
    username: {type: String},
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
  const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
    email:String,
    name: String,
    Contact_number:String
  });
  const StudentSchema = new mongoose.Schema({
    username: String,
    password: String,
    email:String,
    name: String,
    Contact_number:String,
    Roll_no: Number
  });
  
  const ComplaintSchema = new mongoose.Schema({
    title: String,
    description: String,
    branch: String,
    Roll_no: String,
    Contact_number:String
  });
  const SuggestionSchema = new mongoose.Schema({
    title: String,
    description: String,
    branch: String,
    Roll_no: String,
    Contact_number:String
  });


const Admin = mongoose.model('Admin', AdminSchema);
const Hod=mongoose.model('Hod', HodSchema);
const Student = mongoose.model('Student', StudentSchema);
const Complaint = mongoose.model('Complaint', ComplaintSchema);
const Suggestion = mongoose.model('Suggestion', SuggestionSchema);

module.exports = {
    Admin,
    Hod,
    Student,
    Complaint,
    Suggestion
}