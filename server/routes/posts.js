import express from 'express';

import {  getPosts, getPost, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();


router.get('/', getPosts);
router.post('/create', createPost);
router.patch('/:id', updatePost);
router.get('/:id', getPost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;