const dotenv = require("dotenv").config()
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const errorHandler = require("./middleware/errorMiddleware");
const protect = require("./middleware/authMiddleware");
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/", require("./routes/countriesAndTzRoutes"));

app.get("/private", protect, (req,res)=>{
    res.json("success");
})

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
