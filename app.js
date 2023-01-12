const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const ejs = require("ejs");
const request = require("request");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

const connectDB = require("./config/db");
const User = require("./models/User");
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
dotenv.config({ path: "./config/config.env" });
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server running in node on port ${PORT}`);
});

//  08db2d8dd768dc49371df1ce694ce160
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
