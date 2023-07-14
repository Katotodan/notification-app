import {useState} from "react"
import {AiOutlineHeart} from "react-icons/ai"
import {FcLike} from "react-icons/fc"
import axios from "axios"
import Comment from "./Comment"

const Cards = ({user, socket, post}) =>{
    const [liked, setLiked] = useState(post.poepleLike.includes(user))
    const [displayComment, setDisplayComment] = useState(false)
    const handleLike = async(postId, clientUser) =>{
        if(liked){
            setLiked(!liked)
            socket.emit("dislike", {user, "message": "dislike your picture", "to":post.username})
            axios.put("http://localhost:5000/api/v1/dislikeimg",{
                "user": clientUser,
                "id" : postId
            })
        }else{
            setLiked(!liked)
            socket.emit("like", {user,"message": "like your picture", "to":post.username})
            axios.put("http://localhost:5000/api/v1/likeimg",{
                "user": clientUser,
                "id" : postId
            })
        }
    }
    const commentDisplayer = () =>{setDisplayComment(!displayComment)}
    return (
        <div key={post._id} className="post-container">
            <span className="post-user">{post.username}</span>
            <img src={post.postImg} alt={post._id} className="post-img"/>
            <br /><br />
            <div className="like-icons">
                <span>{post.like}</span>
                {
                    liked ? (
                        <span className="like-span" onClick={() => handleLike(post._id,user)}>
                            <FcLike/></span>
                    ) : (
                        <span className="like-span" onClick={() =>handleLike(post._id,user)}><AiOutlineHeart/></span>
                    )
                }
                <span className="comment-span" onClick={commentDisplayer}>📝</span> 
            </div>
            {displayComment && <Comment imgId={post._id} user={user}/>}  
        </div>
    )
}
export default Cards
