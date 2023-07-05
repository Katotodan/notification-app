import {useEffect, useState} from "react"
const Cards = () =>{
    const [posts , setPosts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/v1/postimg")
        .then(res => res.json())
        .then(data => setPosts([...data]))
        .catch(err => console.log(err))
    })
    
    return(
        <>
        {posts.map(
            post => <div key={post.id} className="post-container">
                    <span className="post-user">{post.username}</span>
                    <img src={post.postImg} alt={post.id} className="post-img"/>
                    <br /><br />
                    <div className="like-icons">
                        <span>{post.like}</span>
                        <span className="like-span">❤</span>
                        <span className="comment-span">📝</span> 
                    </div>
                    
                </div>
            )
        }
        </>
        
    )
}

export default Cards