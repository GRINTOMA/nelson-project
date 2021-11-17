import React, { useState } from 'react'
import { Form, Container} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import axios from 'axios';
import PhoneImput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function CustomPurchaseHandle(props) {
        const [id, setId] = useState('');
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone_number, setPhoneNumber] = useState('');
        const [qty, setQty] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            if(name==="" || email==="" || phone_number==="" || qty===null){
                props.errorHandle("All fields must be filled.")
                return
            }
            if(qty <= 0){
                props.errorHandle("Quantity must be greater than 0")
                return
            }
            const objt = { id, name, email, phone_number, qty };

            //Todo Error Handling
    
            axios
                .post(
                    'https://sheet.best/api/sheets/8bf9f4cf-81c4-42c0-b7be-b18ea790eb6d',
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
                            type='hidden' 
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Custom Order Description</label>
                        <textarea placeholder='Please provide a brief description here....'/>
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
                        <label>Quantity</label>
                        <input
                            placeholder="Enter the quantity you'd like..."
                            onChange={(e) => setQty(e.target.value)}
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
    
    export default CustomPurchaseHandle;