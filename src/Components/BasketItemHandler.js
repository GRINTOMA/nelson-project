import React, { useState, useEffect } from 'react'
import '../index.css'
import { Card, Button } from 'react-bootstrap'
import Bid from './Bid'
import axios from 'axios'

const BasketItemHandler = React.forwardRef((props, ref) => {
    const [show, setShow] = useState(false)
    const [currentBid, setCurrentBid] = useState(0)
    const handleClose = () =>  setShow(false)
    const handleShow = () => setShow(true)
    useEffect(() => {
        axios.get(`https://api.nelson-holiday-sale.com/bids/${props.id}`)
        .then((resp) => {
            setCurrentBid(Number(resp.data.maxBid))
        })
    })

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
                    <h4>Current Bid: ${currentBid}</h4>
                    Retail Value: ${props.price}
                </Card.Text>
                <Button variant='primary' onClick={handleShow}>Place Bid</Button>
            </Card.Body>
            <Bid {...props} img={props.img} show={show} onHide={handleClose}/>
        </Card>
    )
})

export default BasketItemHandler
