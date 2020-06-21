
import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col, Navbar, Nav, NavItem, Button, NavLink} from 'reactstrap';
// import {NavLink} from 'react-router-dom';


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
                            <NavLink className="navLink" to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink href="#">Contact Us</NavLink>
                        </NavItem>
                        <NavItem className="nav-item active">
                            <NavLink className="nav-logo" to="/home">
                                <img id="logo" src="/image/cherryblossomtreelogo.svg"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="products.html">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Orders</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><i className="fa fa-shopping-basket"></i></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </React.Fragment>

        )
    }
}

export default Header;