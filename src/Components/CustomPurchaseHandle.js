import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { Form, Container} from 'semantic-ui-react'
import {Button} from 'react-bootstrap'
import axios from 'axios';
import PhoneImput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function CustomPurchaseHandle(props) {
        const [desc, setDesc] = useState('');
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone_number, setPhoneNumber] = useState('');
        const [qty, setQty] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const id = props.id
            if(desc==="" || name==="" || email==="" || phone_number==="" || qty===null){
                props.errorHandle("All fields must be filled.")
                return
            }
            if(qty <= 0){
                props.errorHandle("Quantity must be greater than 0")
                return
            }
            const objt = { id, desc, name, email, phone_number, qty };

            emailjs.sendForm('service_6olt9ei', 'template_g7uxo7z', '#custom-form', 'user_lHDjn3QujHNMDaq5tVBLt')
            .then((result) =>{
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            axios
                .post(
                    'https://sheet.best/api/sheets/bed32842-e7a8-48c4-9003-90ea86945ad5',
                    objt
                )
                .then((response) => {
                    props.formSuccess()
            });
        };
        return (
            <Container fluid className="container">
                <Form className="form" id='custom-form'>
                <Form.Field>
                        <label>Name</label>
                        <input
                            value={props.name}
                            onChange={(e) => setName(e.target.value)}
                            name='product'
                            hidden
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Custom Order Description</label>
                        <textarea
                            rows='3'
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder='Please provide a brief description here....'/>
                        
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
                            placeholder="Enter the quantity you'd like..."
                            onChange={(e) => setQty(e.target.value)}
                            min='1'
                            type='number'
                            required
                        />
                    </Form.Field>
                    <p>A confirmation email will sent to the address above.</p>
                    <Button color="blue" type="submit" onClick={handleSubmit}>
                        Submit Custom Order
                    </Button>
                </Form>
            </Container>
        );
    }
    
    export default CustomPurchaseHandle;