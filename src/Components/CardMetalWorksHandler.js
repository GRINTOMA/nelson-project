import React from 'react'
import '../index.css'
import { Card, Button } from 'react-bootstrap'
import PurchaseItem from './PurchaseItem'

const CarouselMetalWorksHandler = React.forwardRef((props, ref) => {
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
                <Card.Title>{props.name} ${props.price}</Card.Title>
                <Button variant='primary' onClick={handleShow}>Purchase</Button>
            </Card.Body>
            <PurchaseItem {...props} img={props.img} show={show} onHide={handleClose}/>
        </Card>
    )
})    
export default CarouselMetalWorksHandler
