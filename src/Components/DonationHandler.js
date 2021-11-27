import React from 'react'
import { Modal } from 'react-bootstrap'
import DonationFormHandler from './DonationFormHandler'

const DonationHandler = (props) => {
    const [error, setError] = React.useState("")
    return (
        <Modal {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered>
                <Modal.Header closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Food Drive Donation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>The button below will redirect you to the HDSB cashless system. 
                        Please specify the information below when making your donation. 
                        This will ensure that Nelson will receive the money. 
                        Monetary donations qualify for a tax receipt.
                    </p>
                    <h4>Please specify the following information when redirected</h4>
                    <ol>
                        <li>
                            School: Nelson HS
                        </li>
                        <li>
                            Initiative: Angel Fund
                        </li>
                        <li>
                            Message: Food Drive
                        </li>
                    </ol>
                    {error !== ""? <p style={{color:'red'}}>{error}</p>:null}
                    <DonationFormHandler {...props} formSuccess={props.onHide} errorHandle={setError}/>
                </Modal.Body>
            
        </Modal>
    )
}

export default DonationHandler
