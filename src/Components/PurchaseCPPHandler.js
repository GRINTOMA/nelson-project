import React from 'react'
import {Image, Offcanvas, Card} from 'react-bootstrap'
import CPPFormHandle from './CPPFormHandle'


const PurchaseBakedGoods = React.forwardRef((props, ref) => {
    const [error, setError] = React.useState("")
    return (
        <Offcanvas placementt='end' backdrop={true} scroll={false} ref={ref} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{props.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image className='w-100 p-3 mx-auto' src={props.img} alt='Baked Good 01'/>
                <Card>
                    <Card.Header>Quantity Available: {props.qty}</Card.Header>
                    <Card.Body>
                        {props.name}<br/>
                        Listed Price: ${props.price}
                    </Card.Body>
                </Card>
                {error !== ""? <p style={{color:'red'}}>{error}</p>:null}
                <CPPFormHandle {...props} formSuccess={props.onHide} errorHandle={setError}/>
            </Offcanvas.Body>
        </Offcanvas>
    )
})
export default PurchaseBakedGoods