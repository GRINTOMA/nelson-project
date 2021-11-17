import React, { useState } from 'react'
import { Form, Container} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import axios from 'axios';
import PhoneImput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function FormHandle(props) {
        const [id, setId] = useState('');
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone_number, setPhoneNumber] = useState('');
        const [bid, setBid] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            if(name==="" || email==="" || phone_number==="" || bid===null){
                props.errorHandle("All fields must be filled.")
                return
            }
            if(bid <= 0){
                props.errorHandle("Bid must be greater than 0")
                return
            }
            const objt = { id, name, email, phone_number, bid };

            //Todo Error Handling
    
            axios
                .post(
                    'https://sheet.best/api/sheets/a267dcf9-b2d0-4f20-b1bc-acb2984321b3',
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
                        <input
                            placeholder={props.id}
                            onChange={(e) => setId(e.target.value)}
                            type='hidden'
                        />
                    </Form.Field>
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
                    <Form.Field>
                        <label>Bid</label>
                        <input
                            placeholder="Enter your bid..."
                            onChange={(e) => setBid(e.target.value)}
                            min='1'
                            type='number'
                            required
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