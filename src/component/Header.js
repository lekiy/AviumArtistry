
import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col, Navbar, Nav, NavItem, Button} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid id="title">
                    <Container>
                        <Row>
                            <Col className="brand">Avium</Col>
                            <Col></Col>
                            <Col className="brand">Artistry</Col>
                        </Row>
                    </Container>
                </Jumbotron>

                <Navbar light className="navbar-expand-sm sticky-top">
                    <Nav navbar id="navbar-layout">
                        <NavItem>
                            {/* <!-- Filler --> */}
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </NavItem>
                        <NavItem className="nav-item active">
                            <NavLink className="nav-logo" to="/home">
                                <img id="logo" src="/image/cherryblossomtreelogo.svg"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/orders">Orders</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className="nav-link" to="/cart"><i className="fa fa-shopping-basket"></i></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </React.Fragment>

        )
    }
}

export default Header;