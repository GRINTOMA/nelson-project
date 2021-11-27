import React, { useState } from 'react'
import { Form, Container} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import axios from 'axios';
import PhoneImput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function DonationFormHandler(props) {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone_number, setPhoneNumber] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            if(name==="" || email==="" || phone_number===""){
                props.errorHandle("All fields must be filled.")
                return
            }
            const objt = { name, email, phone_number };

            //Todo Error Handling
    
            axios
                .post(
                    'https://sheet.best/api/sheets/ac6eec43-5eeb-473c-868a-491201235ac6',
                    objt
                )
                .then((response) => {
                    props.formSuccess()
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
                            type='text'
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="Enter your email..."
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <PhoneImput
                            placeholder='Enter your phone number...'
                            country="CA"
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e)}
                            required
                        />
                    </Form.Field>    
                    <Button variant='primary' href='https://hdsb.schoolcashonline.com/Fee/Details/583/181/false/true' target='_blank' onClick={handleSubmit}>
                        Donate Now!
                    </Button>
                </Form>
            </Container>
        );
    }
    
    export default DonationFormHandler;