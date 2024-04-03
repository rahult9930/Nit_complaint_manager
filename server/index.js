const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const studentRouter = require("./routes/student");
const hodRouter = require("./routes/hod");
const mongoose = require('mongoose');

const cors=require("cors")
app.use(cors());
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/student", studentRouter)
app.use("/hod", hodRouter)

const PORT = 3000;
mongoose.connect('mongodb+srv://rahult9930:Okokok%407240@cluster0.er31bde.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Complaint_Manager" });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
