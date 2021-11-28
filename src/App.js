import './App.css';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Stack, Button, Accordion, Card } from 'react-bootstrap';
import { giftBaskets01 } from './Assets/Baskets/baskets';
import { giftBaskets02 } from './Assets/Baskets/baskets02';
import { giftBaskets03 } from './Assets/Baskets/baskets03';
import { giftBaskets04 } from './Assets/Baskets/baskets04';
import { metalWorks } from './Assets/Baskets/metalworks';
import { metalWorks2 } from './Assets/Baskets/metalworks2';
import { bakedGoods } from './Assets/Baskets/bakedgoods';
import { crafts } from './Assets/Baskets/crafts';
import BasketItemHandler from './Components/BasketItemHandler';
import CardMetalWorksHandler from './Components/CardMetalWorksHandler';
import DonationHandler from './Components/DonationHandler';
import CardHandler from './Components/CardHandler';
import CustomPurchaseItem from './Components/CustomPurchaseItem';
import img from './Assets/Images/poulin_metalworks/custom_orders/img_ex2.jpg'
import { SocketContext, Socket } from './socket';

function App() {
    const ref = React.createRef()
    const [modalShow, setModalShow] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () =>  setShow(false)
    const handleShow = () => setShow(true)
    const desc = 'Custom orders are welcome. This is an example of custom work done in the past. Please provide a brief description of what you would be interested in. We will contact you for more details.'

  return (
    <SocketContext.Provider value={Socket}>
        <div className="App">
            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header><h2>Gift Baskets</h2></Accordion.Header>
                    <Accordion.Body>
                        <Stack gap={1}>
                            <Stack direction='horizontal' gap={5}>
                                {giftBaskets01.map((basket, i) => <BasketItemHandler key={i} {...basket} img={basket.img.default} ref={ref}/>)}
                            </Stack>
                            <Stack direction='horizontal' gap={5}>
                                {giftBaskets02.map((basket, i) => <BasketItemHandler key={i} {...basket} img={basket.img.default} ref={ref}/>)}
                            </Stack>
                            <Stack direction='horizontal' gap={5}>
                                {giftBaskets03.map((basket, i) => <BasketItemHandler key={i} {...basket} img={basket.img.default} ref={ref}/>)}
                            </Stack>
                            <Stack direction='horizontal' gap={5}>
                                {giftBaskets04.map((basket, i) => <BasketItemHandler key={i} {...basket} img={basket.img.default} ref={ref}/>)}
                            </Stack>
                        </Stack>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header><h2>Nelson Metalworks</h2></Accordion.Header>
                    <Accordion.Body>
                        <Stack gap={2}>
                            <Stack direction='horizontal' gap={1}>
                                {metalWorks.map((mWork, i) => <CardMetalWorksHandler key={i} {...mWork} img={mWork.img.default} ref={ref}/>)}
                            </Stack>
                            <Stack direction='horizontal' gap={1}>
                                {metalWorks2.map((mWork, i) => <CardMetalWorksHandler key={i} {...mWork} img={mWork.img.default} ref={ref}/>)}
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img 
                                        variant="top" 
                                        src={img}
                                        alt='Product'
                                        />
                                    <Card.Body>
                                        <Card.Title>Custom Order</Card.Title>
                                        <Button variant='primary' onClick={handleShow}>Purchase</Button>
                                    </Card.Body>
                                    <CustomPurchaseItem img={img} show={show} desc={desc} onHide={handleClose}/>
                                </Card>
                            </Stack>
                        </Stack>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header><h2>Community Pathways Craft Sale</h2></Accordion.Header>
                    <Accordion.Body>
                        <Stack gap={2}>
                            <Stack direction='horizontal' gap={1}>
                                {bakedGoods.map((order, i) => <CardHandler key={i} {...order} img={order.img.default}/>)}
                            </Stack>
                            <Stack direction='horizontal' gap={1}>
                                {crafts.map((order, i) => <CardHandler key={i} {...order} img={order.img.default}/>)}
                            </Stack>
                        </Stack>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header><h2>Donate Money</h2></Accordion.Header>
                        <Accordion.Body>
                            <p>
                                The cost of a box of food is approximately $70. If you wish to donate money towards this please click the button below.
                            </p>
                            <Button variant="primary" onClick={() => setModalShow(true)}>Donate</Button>
                            <DonationHandler show={modalShow} onHide={() => setModalShow(false)}/>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
      </div>
    </SocketContext.Provider>
  )}
export default App;
