import React from 'react'
import '../index.css'
import { Carousel, Image, Button } from 'react-bootstrap'
import PurchaseItem from './PurchaseItem'

const CarouselMetalWorksHandler = React.forwardRef((props, ref) => {
    const [show, setShow] = React.useState(false)
    const handleClose = () =>  setShow(false)
    const handleShow = () => setShow(true)
    return (
        <Carousel.Item {...props}>
            <Image
                fluid
                ref={ref}
                className='mx-auto'
                style={{maxWidth:'18rem', maxHeight:'18rem'}}
                src={props.img}
                alt='Gift Basket'
            />
            <Carousel.Caption>
                <h5>{props.name}</h5>
                <Button variant='primary' onClick={handleShow}>More Info</Button>
            </Carousel.Caption>
            <PurchaseItem {...props} img={props.img} show={show} onHide={handleClose}/>
        </Carousel.Item>
    )
})    
export default CarouselMetalWorksHandler
