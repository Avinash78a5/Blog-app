const Post = require('../models/Post');

const express = require('express');
const router = express.Router();

//Get all posts
router.get('/',async (req , res) => {
    try{
        const posts = await Post.find();
        return res.json(posts);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
})

//Get a single post by id
router.get('/:id', async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({message:'Post not found'});
        }
        return res.json(post);
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
})

//upload a post
router.post('/', async(req,res) => {
    const post = new Post({
        title:req.body.title,
        content:req.body.content,
        category:req.body.category,
        author:req.body.author,
        image:req.body.image
    });

    try {
        const newPost = await post.save();
        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(400).json({message:error.message});
    }
})

//update an existing post
router.post('/:id',async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({message:'Post not found'});
        }

        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        post.category = req.body.category || post.category;
        post.author = req.body.author || post.author;
        post.image = req.body.image || post.image;

        const updatedPost = await post.save();
        return res.json(updatedPost);
    }
    catch(error){
        return res.status(400).json({message:error.message});
    }
})

//delete a post
router.post('/:id',async(req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({message:'Post not found'});
        }

        await Post.findByIdAndDelete({ _id: post._id });
        return res.status(200).json({message:"post deleted"})
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    
});

module.exports = router;