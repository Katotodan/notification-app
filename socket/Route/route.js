import express from 'express'
const router = express.Router()
import {postImg, getPosts} from "../Controller/controller.js"

router.route("/api/v1/postimg").post(postImg).get(getPosts)


export default router