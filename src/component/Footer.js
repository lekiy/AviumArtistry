import React, {Component} from 'react';
import {Container, Row, Col, Navbar} from 'reactstrap';

class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Container className="footerContent">
                    <Row>
                        <Col>
                            <ul className="footerLinks">
                                <li><a className="footerNav" href="#">Home</a></li>
                                <li><a className="footerNav" href="#">About</a></li>
                                <li><a className="footerNav" href="#">Contact Us</a></li>
                                <li><a className="footerNav" href="#">Products</a></li>
                                <li><a className="footerNav" href="#">Orders</a></li>
                            </ul>
                        </Col>
                        <Col className="text-center">
                            <a href="www.facebook.com" className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook social-icon"></i></a>
                            <a href="www.instagram.com" className="btn btn-social-icon btn-instagram"><i className="fa fa-instagram social-icon"></i></a>
                            <a href="www.etsy.com" className="btn btn-social-icon btn-etsy"><i className="fa fa-etsy social-icon"></i></a>
                            <a href="www.twitter.com" className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter social-icon"></i></a>
                            <a href="www.youtube.com" className="btn btn-social-icon btn-youtube"><i className="fa fa-youtube social-icon"></i></a>
                        </Col>
                        <Col>
        
                        </Col>           
                    </Row>
                </Container>
    
            <Navbar id="footerBar">
                <h6 className="copywrite">Copywrite 2020 Avium Artristy</h6>
            </Navbar>
            </React.Fragment>
        );
    }
}

export default Footer;
