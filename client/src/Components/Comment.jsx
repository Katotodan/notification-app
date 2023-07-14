import {useEffect, useState} from "react"
import axios from "axios"
const Comment = ({imgId, user}) =>{
    const [comments, setComments] = useState([])
    const [singleComment, setSingleComment] = useState("")
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/getcomment/${imgId}`)
        .then(data => data.json())
        .then(response => setComments(response))
    },[])
    const handleCommentSub =async (username) =>{
        try {
            await axios.post("http://localhost:5000/api/v1/addcomment",
                {
                    "id": imgId,
                    "comment": singleComment,
                    "client": username
                }
            )
            setComments((prev => [[singleComment, username], ...prev]))
        } catch (error) {
            
        }
        
    }
    const handleComment = (e) => setSingleComment(e.target.value)

    return (
        <>
            <form className="comment--form" onSubmit={(e) => {
                e.preventDefault()
                handleCommentSub(user)
            }}>
                <textarea className="comment--textarea" 
                  onChange={handleComment} 
                  value={singleComment}
                />
                    
                <button className="comment--button">Send</button>
            </form>
            {comments.map(
                (comment, index) => {
                    return (
                        <div key={index} className="single--comment">
                            <h4>{comment[1]}</h4>
                            <p>{comment[0]}</p>
                        </div>
                    )
                }
            )}
        </>
    )
}
export default Comment
// Still have to work on comment functionalities