import express from 'express';

import {  getPosts, getPost, createPost, updatePost } from '../controllers/posts.js'

const router = express.Router();


router.get('/', getPosts);
router.post('/create', createPost);
router.patch('/:id', updatePost);
router.get('/:id', getPost);

export default router;