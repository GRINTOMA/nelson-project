import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Stack, Button, Accordion } from 'react-bootstrap';
import { giftBaskets01 } from './Assets/Baskets/baskets';
import { giftBaskets02 } from './Assets/Baskets/baskets02';
import { metalWorks } from './Assets/Baskets/metalworks';
import { metalWorksCustom } from './Assets/Baskets/metalworkscustom';
import CarouselItemHandler from './Components/CarouselItemHandler';
import CarouselMetalWorksHandler from './Components/CarouselMetalWorksHandler';
import CustomCarouselMetalWorks from './Components/CustomCarouselMeltalWorks';
import DonationHandler from './Components/DonationHandler';

function App() {
    const ref = React.createRef()
    const [modalShow, setModalShow] = React.useState(false)
  return (
    <div className="App">
        <br/><br/>
        <Accordion>
            <Accordion.Item eventKey='0'>
                <Accordion.Header><h2>Gift Baskets</h2></Accordion.Header>
                <Accordion.Body>
                    <Stack gap={3}>
                        <Stack direction='horizontal' gap={1}>
                            <Carousel className='mx-auto p-3 w-50' variant='dark'>
                                {giftBaskets01.map((basket, i) => <CarouselItemHandler key={i} {...basket} img={basket.img.default} ref={ref}/>)}
                            </Carousel>
                            <Carousel className='mx-auto p-3 w-50' variant='dark'>
                                {giftBaskets02.map((basket, i) => <CarouselItemHandler key={i} {...basket} img={basket.img.default} ref={ref}/>)}
                            </Carousel>
                        </Stack>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
                <Accordion.Header><h2>Nelson Metalworks</h2></Accordion.Header>
                <Accordion.Body>
                    <Stack gap={3}>
                        <Stack gap={3}>
                            <>
                                <h3 className='mx-auto'>Purchases</h3>
                                <Carousel className='mx-auto p-3 w-50' variant='dark'>
                                    {metalWorks.map((mWork, i) => <CarouselMetalWorksHandler key={i} {...mWork} img={mWork.img.default} ref={ref}/>)}
                                </Carousel>
                            </>
                            <>
                                <h3 className='mx-auto'>Custom Orders</h3>
                                <Carousel className='mx-auto p-3 w-50' variant='dark'>
                                    {metalWorksCustom.map((mWork, i) => <CustomCarouselMetalWorks key={i} {...mWork} img={mWork.img.default} ref={ref}/>)}
                                </Carousel>
                            </>
                        </Stack>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
            {/* <Accordion.Item eventKey='2'>
                <Accordion.Header><h2>Community Pathways Craft Sale</h2></Accordion.Header>
                <Accordion.Body>
                    <Stack gap={3}>
                        <Stack direction='horizontal' gap={1}>
                            <Carousel className='mx-auto p-3 w-50' variant='dark'>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img1}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img2}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img4}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}/>
                                </Carousel.Item>
                            </Carousel>
                            <Carousel className='mx-auto h-75 w-50' variant='dark'>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img1}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img2}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img4}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}/>
                                </Carousel.Item>
                            </Carousel>
                        </Stack>
                        <Stack direction='horizontal' gap={1}>
                            <Carousel className='mx-auto p-3 w-50' variant='dark'>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img1}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}  />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img2}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}  />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img4}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}  />
                                </Carousel.Item>
                            </Carousel>
                            <Carousel className='mx-auto h-75 w-50' variant='dark'>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img1}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}  />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img2}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}  />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        fluid
                                        className='mx-auto w-25'
                                        src={img4}
                                        alt='Gift Basket'
                                    />
                                    <Carousel.Caption>
                                        <h5>Gift Basket Name</h5>
                                        <Button variant='primary' onClick={handleShow}>More Info</Button>
                                    </Carousel.Caption>
                                    <Bid show={show} img={img1} onHide={handleClose}  />
                                </Carousel.Item>
                            </Carousel>
                        </Stack>
                    </Stack>
                </Accordion.Body>
            </Accordion.Item> */}
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
  )}
export default App;
