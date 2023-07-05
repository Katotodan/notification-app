import PostModel from "../DB/model.js"

const postImg = async(req, res, next)=>{
    try {
        const newPost = await PostModel.create(req.body)
        res.json(newPost)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getPosts = async (req,res, next) =>{
    try {
        const Posts = await PostModel.find({})
        res.json(Posts)
    } catch (error) {
        console.log("Something went wrong")
        next(error)
    }
}

export {postImg, getPosts};