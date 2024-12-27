const express = require('express');
const fs=require("fs")
const server =express()
const PORT=5000;
const cors = require('cors');
const contactRouter = require('./routes/contact');

const connectDB = require('./config/db');

const { configDotenv } = require('dotenv');
connectDB()

var blogs;
fs.readFile('blogs.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    blogs = JSON.parse(data);
    console.log(blogs[0].id); // Output: John Doe
    console.log(blogs[0].name);   // Output: 30 
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
server.use(express.json());
server.use(cors())
server.use('/',contactRouter);

server.get('/api/blogs',(req,res)=>{
  res.json(blogs)
})

server.listen(PORT,(error)=>{
  if(!error){
    console.log(`Server is running at ${PORT}`)
    }
  else
    console.log("Error occured",error);
});