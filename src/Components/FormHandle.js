import React, { useState } from 'react'
import { Form, Container} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import axios from 'axios';

function FormHandle(props) {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone_number, setPhoneNumber] = useState('');
        const [bid, setBid] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            
    
            const objt = { name, email, phone_number, bid };
    
            axios
                .post(
                    'https://sheet.best/api/sheets/a267dcf9-b2d0-4f20-b1bc-acb2984321b3',
                    objt
                )
                .then((response) => {
                    console.log(response);
                    console.log(props)
            });
        };
        return (
            <Container fluid className="container">
                <Form className="form">
                    <Form.Field>
                        <label>Name</label>
                        <input
                            placeholder="Enter your name..."
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="Enter your email..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <input
                            placeholder="Enter your phone number..."
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Bid</label>
                        <input
                            placeholder="Enter your bid..."
                            onChange={(e) => setBid(e.target.value)}
                        />
                    </Form.Field>
    
                    <Button color="blue" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
    
    export default FormHandle;