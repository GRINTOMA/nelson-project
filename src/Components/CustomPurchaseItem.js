import React from 'react'
import {Image, Offcanvas, Card} from 'react-bootstrap'
import CustomPurchaseHandle from './CustomPurchaseHandle'

const CustomPurchaseItem = React.forwardRef((props, ref) => {
    const [error, setError] = React.useState("")
    return (
        <Offcanvas placementt='end' backdrop={true} scroll={false} ref={ref} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{props.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image className='w-100 p-3 mx-auto' src={props.img} alt='Basket01'/>
                <Card>
                    <Card.Header>Description</Card.Header>
                    <Card.Body>{props.desc}</Card.Body>
                </Card>
                {error !== ""? <p style={{color:'red'}}>{error}</p>:null}
                <CustomPurchaseHandle {...props} formSuccess={props.onHide} errorHandle={setError}/>
            </Offcanvas.Body>
        </Offcanvas>
    )
})
export default CustomPurchaseItem