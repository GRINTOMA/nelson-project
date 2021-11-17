import React from 'react'
import {Image, Offcanvas, Accordion} from 'react-bootstrap'
import CustomPurchaseHandle from './PurchaseFormHandle'

const CustomPurchaseItem = React.forwardRef((props, ref) => {
    const [error, setError] = React.useState("")
    return (
        <Offcanvas placementt='end' backdrop={false} scroll={true} ref={ref} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{props.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image className='w-100 p-3 mx-auto' src={props.img} alt='Basket01'/>
                <Accordion defaultActiveKey='0'>
                    <Accordion.Item activeKey='0'>
                        <Accordion.Header>{props.name} Description</Accordion.Header>
                        <Accordion.Body>
                            {props.desc}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br/><br/>
                {error !== ""? <p style={{color:'red'}}>{error}</p>:null}
                <CustomPurchaseHandle {...props} formSuccess={props.onHide} errorHandle={setError}/>
            </Offcanvas.Body>
        </Offcanvas>
    )
})
export default CustomPurchaseItem