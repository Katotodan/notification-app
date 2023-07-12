import {IoMdNotificationsOutline} from "react-icons/io"
import {AiOutlineMessage} from "react-icons/ai"
import {GrAddCircle} from "react-icons/gr"
import {useState, useRef} from "react"
import LikeMsg from "./LikeMsg"
const Navbar = ({user, socket}) =>{
    const [likeNoti, setLikeNoti] = useState(0)
    const [msgNoti, setMsgNoti] = useState(0)
    const [likePeople, setLikePeople] = useState([])
    const likeNotification = useRef(null)
    socket?.on("pictureLiked", (message) => {
        setLikeNoti((prev) => prev + 1)
        setLikePeople((prev) => [...prev, message])
    })
    const displayLike = () =>{
        if(likeNotification.current.style.display === "block"){
            likeNotification.current.style.display = "none"
            setLikeNoti(0)
        }else{
            likeNotification.current.style.display = "block"
        }  
    }
    const clearLike = ()=>{
        likeNotification.current.style.display = "none"
        setLikeNoti(0)
        setLikePeople([])
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
                <div className="notification">
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
            </div>
        </nav>
    )
}
export default Navbar
