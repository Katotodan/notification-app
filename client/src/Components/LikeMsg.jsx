import {forwardRef} from "react"
const LikeMsg = forwardRef((props, ref)=>{
    return (
        <div className="like-msg" ref={ref}>
            {props.like.length < 1 ? <span>No message</span> : (
                <>{
                    props.like.map((elmt, index) => <div key={index}> {elmt} liked your picture</div>)
                  }
                    <button onClick={props.displayLike}>Clear</button>
                </>
                
            )}
        </div>
    )
})
const CommentMsg = forwardRef((props, ref)=>{
    return (
        <div className="like-msg" ref={ref}>
            {props.comment.length < 1 ? <span>No message</span> : (
                <>{
                    props.comment.map((elmt, index) => <div key={index}> {elmt} comment on your picture</div>)
                  }
                    <button onClick={props.displayComment}>Clear</button>
                </>
                
            )}
        </div>
    )
})

export {LikeMsg , CommentMsg}