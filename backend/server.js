const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo-service:27017/campusdb";

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

// schema + model inline
const StudentSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  dob: String,
  placeOfBirth: String
});

const Student = mongoose.model("Student", StudentSchema);

app.post("/students", async (req, res) => {
  try {
    const { fullName, age, dob, placeOfBirth } = req.body;
    const student = new Student({ fullName, age, dob, placeOfBirth });
    await student.save();
    res.json({ message: "Student saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
