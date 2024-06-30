const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
const app = express();
require('./connectDB')
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

const dataRoute = require('./routes/dataRoute')

app.use('/data',dataRoute)

// Start the server
app.listen(process.env.PORT, ()=>{
  console.log("Server is running " + process.env.PORT);
})