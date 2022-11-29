import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const CommentBox = (props:any)=>{

    const [text, setText] = useState('');

    return (
        <div>
            <Row style={{marginTop: '2vh'}}>
                <Col xs={9} md={10}>
                     <textarea 
                        id="chatbox" 
                        onChange={ e => setText(e.target.value)} 
                        style={{height: '8vh', width: '100%'}} 
                        placeholder="write here..."
                        value={text}>
                    </textarea>
                </Col>
                <Col xs={3} md={2}>
                    <Button onClick={()=> {
                        props.clickSend(text)
                        setText('')
                    }
                    } color="primary">Enviar</Button>
                </Col>
            </Row>
        </div>
    )
}

export default CommentBox;