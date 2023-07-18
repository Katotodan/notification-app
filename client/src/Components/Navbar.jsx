import {IoMdNotificationsOutline} from "react-icons/io"
import {AiOutlineMessage} from "react-icons/ai"
import {GrAddCircle} from "react-icons/gr"
import {useState, useRef} from "react"
import {LikeMsg,CommentMsg} from "./LikeMsg"
const Navbar = ({user, socket}) =>{
    const [likeNoti, setLikeNoti] = useState(0)
    const [msgNoti, setMsgNoti] = useState(0)
    const [comments, setComments] = useState([])
    const [likePeople, setLikePeople] = useState([])
    const likeNotification = useRef(null)
    const commentNotification = useRef(null)
    socket?.on("pictureLiked", (message) => {
        setLikeNoti((prev) => prev + 1)
        setLikePeople((prev) => [...prev, message])
    })
    socket?.on("pictureCommented", (message) => {
        setMsgNoti((prev) => prev + 1)
        setComments((prev) => [message, ...prev])
    })
    const displayLike = () =>{
        if(likeNotification.current.style.display === "block"){
            likeNotification.current.style.display = "none"
            setLikeNoti(0)
        }else{
            commentNotification.current.style.display = "none"
            likeNotification.current.style.display = "block"
        }  
    }
    const clearLike = ()=>{
        likeNotification.current.style.display = "none"
        setLikeNoti(0)
        setLikePeople([])
    }
    const dComment = () =>{
        if(commentNotification.current.style.display === "block"){
            commentNotification.current.style.display = "none"
            setMsgNoti(0)
        }else{
            likeNotification.current.style.display = "none"
            commentNotification.current.style.display = "block"
        }  
    }
    const clearComment = ()=>{
        commentNotification.current.style.display = "none"
        setMsgNoti(0)
        setComments([])
    }
    

    return(
        <nav>
            <div className="logo">
                El-p
            </div>
            <div className="notifications">
                <div className="notification">
                    <div className="icon" onClick={displayLike}>
                        <IoMdNotificationsOutline/>
                    </div>
                    {likeNoti > 0 ? <div className="number">{likeNoti}</div> : <></> }
                    
                </div>
                <div className="notification" onClick={dComment}>
                    <div className="icon">
                        <AiOutlineMessage/>
                    </div>
                    {msgNoti > 0 ? <div className="number">{msgNoti}</div> : <></>}
                    
                </div>
                <div className="add-photo">
                    <GrAddCircle/>
                </div>
                <div className="username">{user}</div>
                <LikeMsg like={likePeople} ref={likeNotification} displayLike ={clearLike}/>
                <CommentMsg comment={comments} ref={commentNotification} displayComment ={clearComment}/>
            </div>
        </nav>
    )
}
export default Navbar
