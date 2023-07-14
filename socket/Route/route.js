import express from 'express'
const router = express.Router()
import {
    postImg, 
    getPosts, 
    likeImg, 
    disLikeImg, 
    addComment, 
    getComments} from "../Controller/controller.js"

router.route("/api/v1/postimg").post(postImg).get(getPosts)
router.route("/api/v1/likeimg").put(likeImg)
router.route("/api/v1/dislikeimg").put(disLikeImg)
router.route("/api/v1/addcomment").post(addComment)
router.route("/api/v1/getcomment/:id").get(getComments)


export default router