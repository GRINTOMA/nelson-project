import React, { useState } from 'react'
import { Form, Container} from 'semantic-ui-react'
//import {Button} from 'react-bootstrap'
import axios from 'axios';
import PhoneImput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import * as emailjs from 'emailjs-com'

function FormHandle(props) {
        const [setProduct] = useState('')
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone_number, setPhoneNumber] = useState('');
        const [bid, setBid] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const id = props.id
            const product = props.name
            if(name==="" || email==="" || phone_number==="" || bid===null){
                props.errorHandle("All fields must be filled.")
                return
            }
            if(bid <= 0){
                props.errorHandle("Bid must be greater than 0")
                return
            }
            const objt = { id, product, name, email, phone_number, bid };

            emailjs.sendForm('service_6olt9ei', 'template_jyvm9yl', '#bid-form', 'user_lHDjn3QujHNMDaq5tVBLt')
                .then((result) =>{
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
    
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
                <Form className="form" id='bid-form'>
                <Form.Field>
                        <input
                            placeholder="Enter your name..."
                            name='product'
                            value={props.name}
                            onChange= {(e) => setProduct(e.target.value)}
                            hidden
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input
                            placeholder="Enter your name..."
                            name='to_name'
                            onChange={(e) => setName(e.target.value)}
                            type='text'
                            required
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder="Enter your email..."
                            name='to_email'
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
    
                    <input className='input-button' color="blue" type="submit" value='Submit Bid' onClick={handleSubmit}/>
                </Form>
            </Container>
        );
    }
    
    export default FormHandle;