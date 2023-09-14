import React, { useState } from 'react'
import MOCK from "../../MOCK_DATA (1).json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Main.css"
function Main() {
    const [movedata, setmovedata] = useState(MOCK);
    function movefoo() {
        console.log("SALAm");
    }

    return (
        <div className="card-parent">
            {movedata.map((ele) => {
                return (<Card style={{ width: '18rem' }} className='card-parent'>
                    <Card.Body className='card-main' onMouseOver={movefoo}>
                        <Card.Img variant="top" src={ele.id ? ele.id : ""} style={{ borderRadius: "50%" }} />
                        <Card.Title>{ele.first_name ? ele.first_name : ''}</Card.Title>
                        <Card.Text>
                            {ele.email ? ele.email : ""}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>)
            })}


        </div>
    )
}

export default Main