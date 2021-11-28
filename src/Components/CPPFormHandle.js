import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { Form, Container} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import axios from 'axios';
import PhoneImput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function CPPFormHandle(props) {
        const [setProd] = useState('');
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone_number, setPhoneNumber] = useState('');
        const [qty, setQty] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const id = props.id
            const product = props.name
            if(name==="" || email==="" || phone_number==="" || qty===null){
                props.errorHandle("All fields must be filled.")
                return
            }
            if(qty <= 0){
                props.errorHandle("Bid must be greater than 0")
                return
            }
            const objt = { id, product, name, email, phone_number, qty };

            emailjs.sendForm('service_6olt9ei', 'template_8satrvp', '#cpp-form', 'user_lHDjn3QujHNMDaq5tVBLt')
                .then((result) =>{
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
    
            axios
                .post(
                    'https://sheet.best/api/sheets/e17f5acf-c076-4969-938d-2592cccd7039',
                    objt
                )
                .then((response) => {
                    props.formSuccess()
            });
        };
        return (
            <Container fluid className="container">
                <Form className="form" id='cpp-form'>
                    <Form.Field>
                        <input
                            value={props.name}
                            name='product'
                            onChange={(e) => setProd(e.target.value)}
                            type='hidden'
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input
                            placeholder="Enter your name..."
                            onChange={(e) => setName(e.target.value)}
                            name='to_name'
                            type='text'
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="Enter your email..."
                            onChange={(e) => setEmail(e.target.value)}
                            name='to_email'
                            type='email'
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <PhoneImput
                            placeholder='Enter your phone number...'
                            defaultCountry="CA"
                            value={phone_number}
                            onChange={(e) => setPhoneNumber(e)}
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Quantity</label>
                        <input
                            placeholder="Enter the quantity you would like..."
                            onChange={(e) => setQty(e.target.value)}
                            min='1'
                            type='number'
                            required
                        />
                    </Form.Field>
    
                    <Button color="blue" type="submit" onClick={handleSubmit}>
                        Submit Purchase
                    </Button>
                </Form>
            </Container>
        );
    }
    
    export default CPPFormHandle;