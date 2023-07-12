import {useEffect, useState} from "react"


const Comment = () =>{
    const [comments, setComments] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/api/v1/postimg")
        .then(data => data.json())
        .then(response => setComments([response]))
    })


    return (
        <>
            <form>
                <textarea></textarea>
                <button>Send</button>
            </form>
            {comments.map(comment => <div>{comment}</div>)}
        </>
    )
}