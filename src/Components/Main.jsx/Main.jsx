import React, { useState } from 'react'
import MOCK from "../../MOCK_DATA (1).json"
import Students from "../../Que.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Main.css"
function Main() {
    const [movedata, setmovedata] = useState(MOCK);
    function movefoo(indexٖ) {
        const restdata = movedata[indexٖ]
        // setmovedata(restdata[indexٖ])
        console.log(restdata);
        // setmovedata(restdata)

        console.log("SALAM", indexٖ);
    }
    function moveleave(indexٖ) {
        // setmovedata(Students)
        console.log("SALAM moveleave", indexٖ);
    }
    return (
        <div className="card-parent">
            {movedata.map((ele, indexٖ) => {
                return (<Card style={{ width: '18rem' }} className='card-parent'>
                    <Card.Body
                        className='card-main'
                        onMouseLeave={() => moveleave(indexٖ)}
                        onMouseOver={() => movefoo(indexٖ)}>
                        <Card.Img variant="top" src={ele.id ? ele.id : ""} style={{ borderRadius: "50%" }} />
                        <Card.Title>{ele.first_name ? ele.first_name : ""}</Card.Title>
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