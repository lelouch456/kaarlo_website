const Blog = require('../models/Blog');

exports.getBLogs =async (req,res)=>{
    const blogs = await Blog.find();
    res.json(blogs);
};

exports.createBlog =async (req,res)=>{
    const newBlog = new Blog(req.body);
    const savedBlog =await newBlog.save();
    res.json(savedBlog);
};

exports.updateBlog= async (req,res)=>{
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new : true});
    res.json(updatedBlog);
};

exports.deleteBlog=async (req,res)=>{
    await Blog.findByIdAndDelete(req.params.id);
};