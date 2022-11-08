import Comment from "../Comment.js/Comment"

const CommentHistory = (props: any)=>{
    return (
        <>
            {
                props.comments.map((comment: string)=>
                    (<Comment text={comment} />)
                )
            }
        </>
    )
}

export default CommentHistory