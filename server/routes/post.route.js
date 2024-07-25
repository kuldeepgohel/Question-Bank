import express  from "express"
const router = express.Router();
import {createPost,getAllPost,getSinglePost,deletePost,updatePost} from '../controllers/post.controller.js'

router.post('/createpost',createPost);
router.get('/getallpost',getAllPost);
router.get('/getsinglepost',getSinglePost);
router.delete('/deletepost',deletePost);
router.put('/updatepost',updatePost);


export default router;