import React from 'react'
import '../index.css'
import { Carousel, Image, Button } from 'react-bootstrap'
import Bid from './Bid'

const CarouselItemHandler = React.forwardRef((props, ref) => {
    const [show, setShow] = React.useState(false)
    const handleClose = () =>  setShow(false)
    const handleShow = () => setShow(true)
    return (
        <Carousel.Item {...props}>
            <Image
                fluid
                ref={ref}
                className='mx-auto w-100 p-4'
                src={props.img}
                alt='Gift Basket'
            />
            <Carousel.Caption>
                <h4>{props.desc}</h4>
                <Button variant='primary' onClick={handleShow}>More Info</Button>
            </Carousel.Caption>
            <Bid {...props} img={props.img} show={show} onHide={handleClose}/>
        </Carousel.Item>
    )
})

export default CarouselItemHandler
