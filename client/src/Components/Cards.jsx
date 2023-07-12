import {useState} from "react"
import {AiOutlineHeart} from "react-icons/ai"
import {FcLike} from "react-icons/fc"
const Cards = ({user, socket, post}) =>{
    



    const [liked, setLiked] = useState(post.poepleLike.includes(user))
    
    const handleLike =(e)=>{
        if(liked){
            setLiked(!liked)
            socket.emit("like", {user, "message": "dislike your picture", "to":post.username})
        }else{
            setLiked(!liked)
            socket.emit("like", {user,"message": "like your picture", "to":post.username})
        }
    }
    return (
        <div key={post.id} className="post-container">
            <span className="post-user">{post.username}</span>
            <img src={post.postImg} alt={post.id} className="post-img"/>
            <br /><br />
            <div className="like-icons">
                <span>{post.like}</span>
                {
                    liked ? (
                        <span className="like-span" onClick={handleLike}><FcLike/></span>
                    ) : (
                        <span className="like-span" onClick={handleLike}><AiOutlineHeart/></span>
                    )
                }
                
                <span className="comment-span">📝</span> 
            </div>
            
        </div>
    )
}

export default Cards