import React, {Component} from 'react';
import {Input, Form, FormGroup, Button, Col, Row, Label} from 'reactstrap';

class Contact extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col>
                        <h3>Contact Us</h3> <br />
                        <p className="text-center">Need any help with a product? Want us to make a custom order?</p>
                    </Col>
                </Row>
                <Form>
                    <Row form >
                        <Col className="text-center">
                            <FormGroup>
                                {/* <Label for="firstName">First Name</Label> */}
                                <Input className="text-center" name="firstName" id="firstName" placeholder="First Name"></Input>
                            </FormGroup>
                        </Col>
                        <Col className="text-center">
                            <FormGroup>
                                {/* <Label for="lastName">Last Name</Label> */}
                                <Input className="text-center" name="lastName" id="lastName" placeholder="Last Name"></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="text-center">
                        {/* <Label for="email">Email</Label> */}
                        <Input className="text-center" name="email" id="email" placeholder="Email"></Input>
                    </FormGroup>
                    <FormGroup className="text-center">
                        {/* <Label for="text">Your Request</Label> */}
                        <Input className="text-center" type="textarea" name="text" id="text" rows="10" placeholder="Your Message"></Input>
                    </FormGroup>
                    <Col className="text-center">
                        <Button type="submit" className="btn btn-light btn-center">Send Message</Button>
                    </Col>
                </Form>
            </React.Fragment>
        );
    }
}

export default Contact;