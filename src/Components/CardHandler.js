import React from 'react'
import { Card, Button } from 'react-bootstrap'
import PurchaseBakedGoods from './PurchaseCPPHandler'

const CardHandler = (props) => {
    const [show, setShow] = React.useState(false)
    const handleClose = () =>  setShow(false)
    const handleShow = () => setShow(true)
    return (
        <Card className='mx-auto' style={{ width: '18rem' }} {...props}>
            <Card.Img 
                variant="top" 
                src={props.img}
                alt='Product'
                />
            <Card.Body>
                <Card.Title>{props.name}<br/> Price: ${props.price}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant='primary' onClick={handleShow}>Purchase</Button>
            </Card.Body>
            <PurchaseBakedGoods {...props} img={props.img} show={show} onHide={handleClose}/>
        </Card>
    )
}

export default CardHandler
