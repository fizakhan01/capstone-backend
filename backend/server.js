const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/playlists", require("./routes/playlistRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});