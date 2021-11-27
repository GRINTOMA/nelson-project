import React from 'react'
import '../index.css'
import { Card, Button } from 'react-bootstrap'
import Bid from './Bid'

const BasketItemHandler = React.forwardRef((props, ref) => {
    const [show, setShow] = React.useState(false)
    const handleClose = () =>  setShow(false)
    const handleShow = () => setShow(true)
    return (
        <Card style={{ width: '18rem' }} {...props}>
            <Card.Img 
                variant="top" 
                src={props.img}
                alt='Product'
                />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    Retail Value: ${props.price}
                </Card.Text>
                <Button variant='primary' onClick={handleShow}>Place Bid</Button>
            </Card.Body>
            <Bid {...props} img={props.img} show={show} onHide={handleClose}/>
        </Card>
    )
})

export default BasketItemHandler
