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
const likeImg = async (req, res, next) =>{
    try {
        const img = await PostModel.findOne({ _id: req.body.id })
        img.$inc('like', 1)
        img.$inc('showNotifications', 1)
        img.poepleLike.push(req.body.user);
        await img.save()

        res.json(img)
    } catch (error) {
        next(error)
    }
}
const disLikeImg = async (req, res, next) =>{
    try {
        const img = await PostModel.findOne({ _id: req.body.id })
        img.$inc('like', -1)
        img.poepleLike = img.poepleLike.filter(people => people !== req.body.user)
        await img.save()
        res.json(img)
    } catch (error) {
        next(error)
    }
}

const addComment = async (req, res, next) =>{
    try {
        const img = await PostModel.findOne({ _id: req.body.id })
        img.comments.push([req.body.comment, req.body.client])
        await img.save()
        res.json(img)
    } catch (error) {
        next(error)
    }
}
const getComments = async (req, res, next) =>{
    try {
        const img = await PostModel.findOne({ _id: req.params.id })
        res.json(img.comments.reverse())
    } catch (error) {
        next(error)
    }
}


export {postImg, getPosts, likeImg, disLikeImg, addComment, getComments};