const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/campusconnect", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String,
});

const Student = mongoose.model("Student", StudentSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Campus Connect Backend Running 🚀");
});

app.post("/api/students", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
