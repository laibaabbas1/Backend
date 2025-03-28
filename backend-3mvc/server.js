const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config()
const app = express();
//import or require the route
const routes = require('./routes/taskRoutes')
const PORT = process.env.PORT || 777;

app.use(express.json())
app.use(cors())



//to connect mongoose
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("mongodb connected ..."))
    .catch((err) => console.log(err));

app.use("/api", routes)
app.listen(PORT, () => {
    console.log(`server is running on port  ${port}`)


})