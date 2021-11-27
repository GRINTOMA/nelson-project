import React from 'react'
import {Image, Offcanvas, Card} from 'react-bootstrap'
import PurchaseFormHandle from './PurchaseFormHandle'

const PurchaseItem = React.forwardRef((props, ref) => {
    const [error, setError] = React.useState("")
    return (
        <Offcanvas placementt='end' backdrop={true} scroll={false} ref={ref} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{props.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image className='w-100 p-3 mx-auto' src={props.img} alt='Baked Good 01'/>
                <Card>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Body>
                        Dimensions: {props.desc}<br/>
                        Price: ${props.price}
                    </Card.Body>
                </Card>
                {error !== ""? <p style={{color:'red'}}>{error}</p>:null}
                <PurchaseFormHandle {...props} formSuccess={props.onHide} errorHandle={setError}/>
            </Offcanvas.Body>
        </Offcanvas>
    )
})
export default PurchaseItem