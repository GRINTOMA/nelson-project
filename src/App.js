import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './Assets/Images/basket01.jpg'
import img2 from './Assets/Images/basket02.jpg'
import img4 from './Assets/Images/basket04.jpg'
import { Carousel, Image, Button, Stack, Accordion } from 'react-bootstrap';
import Bid from './Components/Bid'

function App() {
  const [show, setShow] = React.useState(false)
  const handleClose = () =>  setShow(false)
  const handleShow = () => setShow(true)
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
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
                <Accordion.Header><h2>Mr. Poulin's Metalworks</h2></Accordion.Header>
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
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
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
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
                <Accordion.Header><h2>Food Hamper Donations</h2></Accordion.Header>
                <Accordion.Body>
                <Button variant='primary' onClick={handleShow}>Donate Now</Button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </div>
  )}
export default App;
