const express= require('express');
const router =express.Router();
const blogController =require('../controllers/blog');

router.get('/',blogController.getBlogs);
router.post('/:id',blogController.createBlog);
router.put('/:id',blogController.updateBlog);
router.delete('/:id',blogController.deleteBlog);

module.exports=router;