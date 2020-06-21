import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

class About extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <React.Fragment>
            
            <Row className="section">
                <Col noGutters>
                    <h2>Our Story</h2>
                </Col>
                <Row>
                    <Col className="lg-4">
                        <img src="emily-portrate.jpg" alt="An image of Emily the creator of Avium Artistry" />
                    </Col>
                    <Col className="lg-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Row>
            </React.Fragment>
        )
    }
}

export default About;