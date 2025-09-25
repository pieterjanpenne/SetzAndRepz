const express = require("express");
const dotenv = require("dotenv");
const workoutRoutes = require("./routes/workouts");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // Voor JSON parsing
app.use("/api/workouts", workoutRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
