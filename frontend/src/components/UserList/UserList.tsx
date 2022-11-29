import { useState } from "react";
import { Row } from "react-bootstrap";

const UserList = (props: any)=>{

    const [isMouseOver, setMouseOver] = useState(false);

    return (
        <>
        <Row 
            onMouseEnter={()=> setMouseOver(true) }
            onMouseLeave={()=> setMouseOver(false)}
            style={{
                background: ((props.users.logged || !props.users.logged) && isMouseOver) ?  'blue' : 
                             (props.users.logged) ? 'green' : 'red', 
                //background: isMouseOver? 'cyan' : 'white',
                borderRadius: '10px'
            }}
        >
            hola
        </Row>
        </>
    )

}



export default UserList;