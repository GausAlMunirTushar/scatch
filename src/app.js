const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/database");

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(cookieParser());

// Database connection
connectDatabase();

// Set static files location
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1y" }));

// Set EJS view engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => res.send("Hello World!"));

module.exports = app;

