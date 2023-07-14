import mongoose from "mongoose";

const addPost = new mongoose.Schema(
    { 
        username: {
            type: String,
            require: true
        }, 
        postImg:  {
            type: String,
            require: true
        },
        like: {
            type: Number,
            default: 0
        },
        poepleLike: {
            type: [String],
            default : []
        },
        comments:{
            type:[[String]],
            default:[]
        }
    }
)

const PostModel = mongoose.model('Post', addPost)

export default PostModel