import React from 'react'
import {Image, Offcanvas, Accordion} from 'react-bootstrap'
import FormHandle from './FormHandle'

const Bid = React.forwardRef((props, ref) => {
    const [error, setError] = React.useState("")
    return (
        <Offcanvas placementt='end' backdrop={true} scroll={false} ref={ref} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{props.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image className='w-100 p-3 mx-auto' src={props.img} alt='Basket01'/>
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>{props.name} Basket Description</Accordion.Header>
                        <Accordion.Body>
                           {props.desc}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>{props.name} Basket Contents</Accordion.Header>
                        <Accordion.Body>
                           <ul>
                                {props.list.map((item, i) => <li key={i}>{item}</li>)}
                           </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br/><br/>
                {error !== ""? <p style={{color:'red'}}>{error}</p>:null}
                <FormHandle {...props} formSuccess={props.onHide} errorHandle={setError}/>
            </Offcanvas.Body>
        </Offcanvas>
    )
})
export default Bid
