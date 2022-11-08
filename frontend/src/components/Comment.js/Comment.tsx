import { Card } from "react-bootstrap";


const Comment = (props: any)=>{
    return (
        <Card style={{marginTop: '10px'}}>
            <Card.Body>{props.text}</Card.Body>
        </Card>
      /*  <div style={{borderStyle:'solid', borderRadius:'25px', margin: '5px 1px', padding: '10px 10px'}}>
            <h1>Comment</h1>

        </div>*/
    )
}

export default Comment;