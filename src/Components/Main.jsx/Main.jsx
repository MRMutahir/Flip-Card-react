import React, { useState } from 'react'
import MOCK from "../../MOCK_DATA (1).json"
import Students from "../../Que.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Main.css"
function Main() {
    const [movedata, setmovedata] = useState(MOCK);
    function movefoo(index) {
        let newArr = [...movedata]
        newArr[index].first_name = movedata[index].email
        // console.log(setmovedata);
        setmovedata(newArr)
        console.log(newArr[index].first_name);
    }

    function moveleave(index) {
        // setmovedata()
        let newArr = [...MOCK]
        console.log(newArr);
        console.log(MOCK);
        // newArr[index].email = movedata[index].first_name
        // setmovedata(newArr)
        // console.log(newArr[index].email);
        // console.log(movedata[index].first_name);

    }


    return (
        <div className="card-parent">
            {movedata.map
                ((ele, indexٖ) => {
                    return (
                        <Card style={{ width: '18rem' }} className='card-parent'>
                            <Card.Body
                                className='card-main'

                                onMouseLeave={() => moveleave(indexٖ)}
                                onMouseOver={() => movefoo(indexٖ)}>
                                {/* <Card.Img variant="top" src={ele.id ? ele.id : ""} style={{ borderRadius: "50%" }} /> */}
                                <Card.Title>{ele.first_name}</Card.Title>
                                <Card.Text>
                                    {/* {ele.email} */}
                                </Card.Text>

                            </Card.Body>
                        </Card>)
                })}


        </div>
    )
}

export default Main