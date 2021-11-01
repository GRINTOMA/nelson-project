import React from 'react'
import {Image, Offcanvas, Accordion, ListGroup} from 'react-bootstrap'
import basket from '../Assets/Images/basket01.jpg'
import FormHandle from './FormHandle'

function Bid(props) {
    return (
        <Offcanvas placementt='end' backdrop={false} scroll={true} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Gift Basket: Basket #1</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Image className='w-100 p-3 mx-auto' src={basket} alt='Basket01'/>
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Basket Description</Accordion.Header>
                        <Accordion.Body>
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt dapibus massa, quis tincidunt magna rhoncus quis. 
                                In lobortis dignissim leo id vestibulum. 
                                Morbi a nisi rhoncus sem feugiat efficitur non non est. Donec et mauris nunc. 
                                Duis quis mi in nulla laoreet cursus ut nec lacus. Suspendisse fringilla egestas scelerisque. 
                                Integer vel dolor ac libero sagittis facilisis et eu quam. Fusce sed pretium est. 
                                Mauris ex nulla, congue vel massa sed, facilisis vulputate metus. Morbi gravida tempus urna, ornare vulputate nibh scelerisque non. 
                                Nam a est vel lorem faucibus elementum ac venenatis erat. Praesent mattis bibendum magna, sit amet interdum purus finibus a. 
                                Donec eu diam ut enim eleifend facilisis eget efficitur ante.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Basket Items List</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup as='ol' numbered>
                                <ListGroup.Item as='li'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListGroup.Item>
                                <ListGroup.Item as='li'>Morbi id ex id risus dignissim suscipit.</ListGroup.Item>
                                <ListGroup.Item as='li'>Vestibulum sit amet augue pretium, aliquam dolor ut, consectetur lectus.</ListGroup.Item>
                                <ListGroup.Item as='li'>Nulla a est sit amet dolor suscipit rutrum ac vitae tortor.</ListGroup.Item>
                                <ListGroup.Item as='li'>Vestibulum et sapien pretium, finibus nisi sit amet, lobortis tortor.</ListGroup.Item>
                                <ListGroup.Item as='li'>Donec semper tortor sollicitudin dolor iaculis rutrum.</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br/><br/>
                <FormHandle/>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
export default Bid
