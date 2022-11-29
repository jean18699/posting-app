import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {FaHeart} from "react-icons/fa"
import {FaRegHeart} from 'react-icons/fa'



const Comment = (props: any)=>{

    const [liked, setLike] = useState<boolean>(false)

    const toggleLike = ()=>{
        setLike(!liked);
    }

    return (
        <Card style={{marginTop: '10px'}}>
            <Card.Body className="d-flex flex-column">
                    
                    <div className="p-2">{props.text}</div>
                    <div className="p-2" style={{textAlign: 'end'}}>
                        {liked ? 
                        <FaHeart onClick={()=> toggleLike()}/> : 
                        <FaRegHeart onClick={()=> toggleLike()}/>}
                    </div>
                   
                
            </Card.Body>
            
        </Card>
      /*  <div style={{borderStyle:'solid', borderRadius:'25px', margin: '5px 1px', padding: '10px 10px'}}>
            <h1>Comment</h1>

        </div>*/
    )
}

export default Comment;